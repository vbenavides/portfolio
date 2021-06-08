import React from 'react';
import Nav from './Nav';
import GlobalStyle from '../styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Social from './social';
import Email from './Email';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = (props) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContent>
          <Nav />
          <Social />
          <Email />

          <div id='content'>{props.children}</div>
        </StyledContent>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
