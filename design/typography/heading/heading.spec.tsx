import { render } from '@testing-library/react';
import { BasicHeading } from './heading.composition.js';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHeading />);
  const rendered = getByText('Testing Typography');
  expect(rendered).toBeTruthy();
});
