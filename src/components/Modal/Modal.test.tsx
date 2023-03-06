import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import { RoomContext, RoomContextType } from '@contexts/RoomContext';
import { RoomStatus } from '@types';
import data from '@data.json';
import { Modal } from './Modal';

describe('modal element', () => {
  const mockDetailedValue = {
    ...data[0],
    status: RoomStatus.NotCleaned
  };

  const contextValue: RoomContextType = {
    rooms: [],
    updateRoomStatus: () => {},
    openDetailRoom: () => {},
    closeModal: () => {},
    detailedRoom: mockDetailedValue
  };

  it('renders modal element', async () => {
    const wrapper = render(
      <RoomContext.Provider value={contextValue}>
        <Modal />
      </RoomContext.Provider>
    );
    expect(wrapper).toBeTruthy();

    const heading = wrapper.container.querySelector('h3');
    expect(heading?.textContent).toBe(mockDetailedValue.room_number);
  });
});
