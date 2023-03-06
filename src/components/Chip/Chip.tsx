import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { RoomStatus } from '@types';

export type ChipProps = {
  className?: string;
  label: string;
  status: RoomStatus;
};

export const Chip = ({ className, label, status }: ChipProps): ReactElement => {
  return (
    <div
      className={clsx(
        'text-sm rounded-2xl py-1 px-2 border opacity-70 w-fit',
        {
          'border-green-400 text-green-400': status === RoomStatus.ShouldClean,
          'border-sky-400 text-sky-400': status === RoomStatus.Cleaned,
          'border-yellow-400 text-yellow-400': status === RoomStatus.Cleaning,
          'border-red-400 text-red-400': status === RoomStatus.NotCleaned
        },
        className
      )}>
      {label}
    </div>
  );
};
