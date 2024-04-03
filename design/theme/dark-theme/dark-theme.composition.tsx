import React from 'react';
import { ThemeProvider } from '@cohen-codes/design.theme.theme-provider';
import { Button } from '@mui/material';
import { darkTheme } from './dark-theme';

export const DarkTheme = () => (
  <ThemeProvider theme={darkTheme()}>
    <Button variant="contained">Hello, Dark Theme.</Button>
  </ThemeProvider>
);
