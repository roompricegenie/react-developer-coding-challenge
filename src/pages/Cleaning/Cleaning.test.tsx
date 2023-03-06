import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cleaning } from '@pages';
import { RoomContext, RoomContextType } from '@contexts/RoomContext';
import { RoomStatus } from '@types';
import data from '@data.json';

describe('cleaning page', () => {
  const contextValue: RoomContextType = {
    rooms: data.map((room) => ({
      ...room,
      status: RoomStatus.ShouldClean
    })),
    updateRoomStatus: () => {},
    openDetailRoom: () => {},
    closeModal: () => {},
    detailedRoom: null
  };

  it('renders cleaning page', async () => {
    const wrapper = render(
      <RoomContext.Provider value={contextValue}>
        <Cleaning />
      </RoomContext.Provider>
    );
    expect(wrapper).toBeTruthy();

    const heading = screen.getByText('Let′s clean room');

    expect(heading?.textContent).toBeTruthy();

    const elements = wrapper.container.querySelectorAll('tr');
    expect(elements?.length).toBe(data.length + 1);
  });
});
