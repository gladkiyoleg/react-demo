import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../../../scss/App.scss';
import { ThemeContextProvider } from '../../context/theme/themeContext';
import { AuthContextProvider } from '../../context/authentication/authenticationContext';

export default function Page({ children }) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <CssBaseline>
          <Container maxWidth='md'>
            {children}
          </Container>
        </CssBaseline>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};
