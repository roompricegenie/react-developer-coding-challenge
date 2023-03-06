import React from 'react';
import { render, screen } from '@testing-library/react';
import { RoomContext, RoomContextType } from '@contexts/RoomContext';
import { RoomStatus } from '@types';
import { Home } from './Home';
import data from '@data.json';

describe('hom page', () => {
  const contextValue: RoomContextType = {
    rooms: data.map((room) => ({
      ...room,
      status: RoomStatus.NotCleaned
    })),
    updateRoomStatus: () => {},
    openDetailRoom: () => {},
    closeModal: () => {},
    detailedRoom: null
  };

  it('renders home page', async () => {
    const wrapper = render(
      <RoomContext.Provider value={contextValue}>
        <Home />
      </RoomContext.Provider>
    );
    expect(wrapper).toBeTruthy();

    const heading = screen.getByText(
      'Please find the hotel rooms which should be cleaned.'
    );
    expect(heading?.textContent).toBeTruthy();

    const elements = wrapper.getAllByTestId('card');
    expect(elements?.length).toBe(data.length);
  });
});
