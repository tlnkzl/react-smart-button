import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
    screen.debug();
  });
});
