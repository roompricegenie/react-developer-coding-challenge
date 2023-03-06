import React, { ReactElement } from 'react';
import { useRoom } from '@contexts/RoomContext';
import { Card } from '@components';
import { RoomStatus } from '@types';

export const Home = (): ReactElement => {
  const { rooms, openDetailRoom, updateRoomStatus } = useRoom();

  return (
    <>
      <div className="py-5 mb-5 sm:py-10 sm:mb-10">
        <h1>Please find the hotel rooms which should be cleaned.</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {rooms.map((room, index) => (
          <Card
            key={index}
            data={room}
            onClickClean={() =>
              updateRoomStatus(room.room_number, RoomStatus.ShouldClean)
            }
            onClickView={() => openDetailRoom(room.room_number)}
          />
        ))}
      </div>
    </>
  );
};
