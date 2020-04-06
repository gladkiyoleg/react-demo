import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../../../scss/App.scss';
import { ThemeContextProvider } from '../../context/theme/themeContext';

export default function Page({ children }) {
  return (
    <ThemeContextProvider>
      <CssBaseline>
        <Container maxWidth='md'>
          {children}
        </Container>
      </CssBaseline>
    </ThemeContextProvider>
  );
};
