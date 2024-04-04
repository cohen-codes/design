import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Logo } from '@cohen-codes/design.brand.logo';
import { ThemeToggle } from '@cohen-codes/design.theme.theme-toggle';
import { Header } from './header.js';

export const SampleHeader = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <MemoryRouter>
      <Header
        logo={<Logo />}
        navLinks={[
          { label: 'Projects', url: '/projects' },
          { label: 'Contact', url: '/contact' },
          { label: 'About', url: '/about' },
        ]}
        themeToggle={
          <ThemeToggle
            size="small"
            isDark={isDark}
            onClick={() => setIsDark(!isDark)}
          />
        }
      />
    </MemoryRouter>
  );
};
