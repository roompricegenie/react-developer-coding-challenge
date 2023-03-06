import React from 'react';
import { render } from '@testing-library/react';
import { Column, Table } from './Table';

describe('table element', () => {
  it('renders table element', async () => {
    const columns: Column[] = [
      {
        label: 'Field 1',
        field: 'field_1'
      },
      {
        label: 'Field 2',
        field: 'field_2'
      }
    ];

    const data = [
      {
        field_1: 'Field value 1',
        field_2: 'Field value 2'
      }
    ];

    const wrapper = render(<Table columns={columns} data={data} />);

    expect(wrapper).toBeTruthy();

    const tr = wrapper.container.querySelectorAll('tr');
    expect(tr?.length).toBe(data.length + 1);
  });
});
