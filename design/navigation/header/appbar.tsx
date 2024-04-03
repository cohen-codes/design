import React from 'react';
import { Header, HeaderProps } from '@showoff/design.navigation.header';
import { ThemeToggle } from '@nitsan770/portfolio.theme.theme-toggle';
import { SettingsConsumer } from '@nitsan770/portfolio.contexts.settings-context';

export type AppbarProps = {} & HeaderProps;

export function Appbar({ logo, navLinks, ...rest }: AppbarProps) {
  return (
    <SettingsConsumer>
      {({ theme, toggleTheme }) => (
        <Header
          {...rest}
          logo={logo}
          navLinks={navLinks}
          themeToggle={
            <ThemeToggle
              isDark={theme === 'dark'}
              onClick={() => toggleTheme()}
              size="small"
            />
          }
        />
      )}
    </SettingsConsumer>
  );
}
