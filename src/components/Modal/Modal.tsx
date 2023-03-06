import React, { ReactElement, useEffect } from 'react';
import { useRoom } from '@contexts/RoomContext';
import { RoomStatus, StatusLabel } from '@types';
import { Chip } from '@components';
export const Modal = (): ReactElement | null => {
  const { closeModal, detailedRoom } = useRoom();

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';

      return () => {
        body.style.overflow = 'auto';
      };
    }
  }, []);

  if (!detailedRoom) return null;

  return (
    <div
      data-testid="detail-modal"
      className="fixed flex justify-center items-center h-full w-full top-0 right-0 left-0 bottom-0 bg-blend-color backdrop-blur-md p-4">
      <span
        data-testid="close-button"
        className="fixed top-4 right-4 text-5xl font-bold text-white cursor-pointer"
        onClick={closeModal}>
        ×
      </span>
      <div className="rounded-2xl bg-gray-900 max-w-[800px]">
        <div
          className="bg-cover bg-center h-[50vw] sm:h-[500px] rounded-lg"
          style={{ backgroundImage: `url(/${detailedRoom.image})` }}></div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-3xl font-bold text-white">
              {detailedRoom.room_number}
            </h3>
            <Chip
              label={StatusLabel[detailedRoom.status as RoomStatus]}
              status={detailedRoom.status}
            />
          </div>
          <div className="text-md sm:text-xl text-gray-500 mb-5">
            {detailedRoom.category}
          </div>
          <p className="text-gray-300">{detailedRoom.description}</p>
        </div>
      </div>
    </div>
  );
};
