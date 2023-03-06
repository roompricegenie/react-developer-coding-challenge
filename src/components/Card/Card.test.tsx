import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { RoomStatus, TRoom } from '@types';
import data from '@data.json';
import { Card } from './Card';

describe('card element', () => {
  const mockData: TRoom = {
    ...data[0],
    status: RoomStatus.NotCleaned
  };

  it('renders card element', async () => {
    const mockCleanFunction = vi.fn().mockImplementation(() => {});
    const mockViewFunction = vi.fn().mockImplementation(() => {});

    const wrapper = render(
      <Card
        data={mockData}
        onClickView={mockViewFunction}
        onClickClean={mockCleanFunction}
      />
    );
    expect(wrapper).toBeTruthy();

    const h3 = wrapper.container.querySelector('h3');
    expect(h3?.textContent).toBe(mockData.room_number);
  });
});
