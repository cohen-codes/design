// @ts-nocheck
import React, { ReactNode } from 'react';
import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { lightTheme } from '@nitsan770/portfolio.theme.light-theme';

export type ThemeProviderProps = {
  /**
   * The children to render within the theme.
   */
  children?: ReactNode;

  /**
   * The theme to use.
   */
  theme?: ThemeOptions;
};

export function ThemeProvider({
  children,
  theme = lightTheme(),
}: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </MuiThemeProvider>
  );
}

ThemeProvider.defaultProps = {
  children: null,
  theme: lightTheme(),
};
