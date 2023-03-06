import { beforeEach, it } from 'vitest';
import { RoomContext, RoomContextType } from './room.context';
import { RoomStatus } from '@types';
import { render } from '@testing-library/react';
import data from '@data.json';

describe('room context', () => {
  beforeEach<RoomContextType>(async (context) => {
    context.rooms = data.map((room) => ({
      ...room,
      status: RoomStatus.ShouldClean
    }));
    context.updateRoomStatus = () => {};
    context.closeModal = () => {};
    context.openDetailRoom = () => {};
    context.detailedRoom = null;
  });

  it<RoomContextType>('should work', (values) => {
    const context = render(
      <RoomContext.Provider value={values}></RoomContext.Provider>
    );
    expect(context).toBeTruthy();
  });
});
