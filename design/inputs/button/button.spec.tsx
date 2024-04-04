import { render } from '@testing-library/react';
import { SampleButton } from './button.composition.js';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleButton />);
  const rendered = getByText('Click Me!');
  expect(rendered).toBeTruthy();
});
