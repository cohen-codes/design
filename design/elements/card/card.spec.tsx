import React from 'react';
import { render } from '@testing-library/react';
import { CardWithNoSubtitle } from './card.composition.js';

it('should render with the correct title', () => {
  const { getByText } = render(<CardWithNoSubtitle />);
  const rendered = getByText('Project Name');
  expect(rendered).toBeTruthy();
});
