import React from 'react';
import { render, screen } from '@testing-library/react';
import { StatusLabel, RoomStatus } from '@types';
import { Chip } from './Chip';

describe('chip element', () => {
  it('renders chip element', async () => {
    const wrapper = render(
      <Chip
        label={StatusLabel[RoomStatus.Cleaned]}
        status={RoomStatus.Cleaned}
      />
    );
    expect(wrapper).toBeTruthy();

    expect(
      screen.getByText(StatusLabel[RoomStatus.Cleaned])
    ).toBeInTheDocument();
  });
});
