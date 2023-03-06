import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('header element', () => {
  it('renders header element', async () => {
    const wrapper = render(
      <Router>
        <Header />
      </Router>
    );
    expect(wrapper).toBeTruthy();

    const logo = wrapper.container.querySelector('h2');
    expect(logo?.textContent).toBe('Hotel');
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Cleaning')).toBeInTheDocument();
  });
});
