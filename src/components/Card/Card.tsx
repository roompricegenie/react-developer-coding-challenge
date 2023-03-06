import React, { ReactElement } from 'react';
import { Button, Chip } from '@components';
import { RoomStatus, StatusLabel, TRoom } from '@types';

export type CardProps = {
  data: TRoom;
  onClickClean: () => void;
  onClickView: () => void;
};

export const Card = ({
  data,
  onClickClean,
  onClickView
}: CardProps): ReactElement => {
  return (
    <div
      data-testid="card"
      className="relative rounded-lg bg-gray-800 shadow-card">
      <div
        className="bg-cover bg-center h-52 rounded-lg"
        style={{ backgroundImage: `url(/${data.image})` }}></div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-100">
            {data.room_number}
          </h3>
          <Chip label={StatusLabel[data.status]} status={data.status} />
        </div>
        <p className="mb-4 text-gray-400">{data.category}</p>
        <div className="flex items-center gap-4">
          <Button className="w-full" onClick={onClickView}>
            View detail
          </Button>
          <Button
            className="w-full"
            onClick={onClickClean}
            variant="danger"
            disabled={data.status !== RoomStatus.NotCleaned}>
            Needs Cleaning
          </Button>
        </div>
      </div>
    </div>
  );
};
