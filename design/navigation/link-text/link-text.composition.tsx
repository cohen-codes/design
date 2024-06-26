import { MemoryRouter } from 'react-router-dom';
import { LinkText } from './link-text.js';

export const SampleLinkText = () => {
  return (
    <MemoryRouter>
      <LinkText
        url="https://www.enlear.com"
        fontSize={22}
        iconSize="medium"
        fontWeight={400}
        linkText="Hello, Link Text"
      />
    </MemoryRouter>
  );
};
