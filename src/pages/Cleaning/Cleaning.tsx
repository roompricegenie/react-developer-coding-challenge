import React, { ReactElement, useMemo } from 'react';
import { useRoom } from '@contexts/RoomContext';
import { Table, Chip, Button } from '@components';
import { RoomStatus, TRoom, StatusLabel } from '@types';

export const Cleaning = (): ReactElement => {
  const { rooms, updateRoomStatus } = useRoom();

  const filtered = useMemo(() => {
    return rooms.filter((room: TRoom) =>
      [RoomStatus.ShouldClean, RoomStatus.Cleaning].includes(room.status)
    );
  }, [rooms]);

  const columns = useMemo(() => {
    return [
      {
        label: '',
        field: '',
        render: (row: TRoom) => (
          <div
            className="w-64 h-32 sm:w-24 sm:h-12 rounded-md bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(/${row.image})` }}></div>
        ),
        className: 'px-5 py-2 w-40'
      },
      {
        label: 'Room',
        field: 'room_number',
        className: 'text-center text-xl font-semibold'
      },
      {
        label: 'Category',
        field: 'category',
        className: 'text-center'
      },
      {
        label: 'Status',
        field: 'status',
        render: (row: TRoom) => (
          <Chip
            className="mx-auto"
            label={
              row.status === RoomStatus.ShouldClean
                ? 'Should clean'
                : StatusLabel[row.status]
            }
            status={row.status}
          />
        ),
        className: 'text-center'
      },
      {
        label: '',
        field: '',
        render: (row: TRoom) => (
          <div className="flex justify-center gap-3">
            <Button
              className="w-20 h-9"
              onClick={() =>
                updateRoomStatus(row.room_number, RoomStatus.Cleaning)
              }
              variant="warning"
              disabled={row.status === RoomStatus.Cleaning}>
              Clean
            </Button>
            <Button
              className="w-20 h-9"
              onClick={() =>
                updateRoomStatus(row.room_number, RoomStatus.Cleaned)
              }>
              Complete
            </Button>
          </div>
        ),
        className: 'text-center w-40 px-5'
      }
    ];
  }, [updateRoomStatus]);

  return (
    <>
      <div className="py-5 mb-5 sm:py-10 sm:mb-10">
        <h1>Let′s clean room</h1>
      </div>

      <Table columns={columns} data={filtered} />
    </>
  );
};
