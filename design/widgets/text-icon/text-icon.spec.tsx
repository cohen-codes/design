import { render } from '@testing-library/react';
import { BasicTextIcon } from './text-icon.composition.js';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTextIcon />);
  const rendered = getByText('Bit.dev');
  expect(rendered).toBeTruthy();
});
