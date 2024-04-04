import { render } from '@testing-library/react';
import { SampleToggleButton } from './toggle-button.composition.js';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleToggleButton />);
  const rendered = getByText('Option 1');
  expect(rendered).toBeTruthy();
});
