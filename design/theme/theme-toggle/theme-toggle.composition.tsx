import React, { useState } from 'react';
import { lightTheme } from '@cohen-codes/design.theme.light-theme';
import { ThemeProvider } from '@cohen-codes/design.theme.theme-provider';
import { ThemeToggle } from './theme-toggle';

export const BasicThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeProvider theme={lightTheme()}>
      <ThemeToggle isDark={isDark} onClick={() => setIsDark(!isDark)} />
    </ThemeProvider>
  );
};
