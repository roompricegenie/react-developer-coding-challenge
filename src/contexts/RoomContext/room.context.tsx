import React, { useEffect, useState } from 'react';
import { RoomStatus, TRoom } from '@types';
import { Modal } from '@components';
import data from '@data.json';

const key = import.meta.env.REACT_LOCALSTORAGE_KEY || 'room';

export type RoomContextType = {
  rooms: TRoom[];
  updateRoomStatus: (id: string, status: RoomStatus) => void;
  openDetailRoom: (id: string) => void;
  closeModal: () => void;
  detailedRoom: TRoom | null;
};

const initialValue = {
  rooms: [],
  updateRoomStatus: () => {},
  openDetailRoom: () => {},
  closeModal: () => {},
  detailedRoom: null
};

export const RoomContext = React.createContext<RoomContextType>(initialValue);
export function RoomProvider({ children }: any): React.ReactElement {
  const [rooms, setRooms] = useState<TRoom[]>([]);
  const [detailedRoom, setDetailedRoom] = useState<TRoom | null>(null);

  useEffect(() => {
    const defaultRooms = JSON.parse(localStorage.getItem(key) || '{}');

    if (defaultRooms?.length) {
      setRooms(defaultRooms);
    } else {
      const initialized: TRoom[] = data.map((room) => ({
        ...room,
        status: RoomStatus.NotCleaned
      }));
      setRooms(initialized);
    }
  }, []);

  useEffect(() => {
    if (rooms.length) {
      localStorage.setItem(key, JSON.stringify(rooms));
    }
  }, [rooms]);

  const updateRoomStatus = (id: string, status: RoomStatus) => {
    const allRooms = [...rooms];
    const index = allRooms.findIndex((room) => room.room_number === id);
    if (index > -1) {
      allRooms[index].status = status;
      setRooms(allRooms);
    }
  };

  const openDetailRoom = (id: string) => {
    const room = rooms.find((room) => room.room_number === id);
    if (room) setDetailedRoom(room);
  };

  const closeModal = () => {
    setDetailedRoom(null);
  };

  return (
    <>
      <RoomContext.Provider
        value={{
          rooms,
          updateRoomStatus,
          openDetailRoom,
          closeModal,
          detailedRoom
        }}>
        {children}
        {!!detailedRoom && <Modal />}
      </RoomContext.Provider>
    </>
  );
}

export function useRoom() {
  const context = React.useContext(RoomContext);

  if (context === undefined) {
    throw new Error('useRoom must be used within a RoomProvider');
  }
  return context;
}
