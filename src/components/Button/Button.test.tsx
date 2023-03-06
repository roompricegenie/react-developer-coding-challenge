import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('button element', () => {
  it('renders button element', async () => {
    const primaryButton = render(<Button>Primary button</Button>);
    expect(primaryButton).toBeTruthy();

    const dangerButton = render(
      <Button variant="danger">Danger button</Button>
    );
    expect(dangerButton).toBeTruthy();

    const warningButton = render(
      <Button variant="warning">Warning button</Button>
    );
    expect(warningButton).toBeTruthy();
  });
});
