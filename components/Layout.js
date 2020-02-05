import React, { Component } from 'react';
import  styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';


const theme = {
    black: '#393939',
    grey: '#3A3A3A',
    white: '#ffffff',
    maxWidth: '100%',
}


const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`;

const InnerPage = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;


const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'fira_mono';
    src: url('../public/static/fonts/Fira_Mono/FiraMono-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'josefin_san';
    src: url('../public/static/fonts/Josefin_Sans/JosefinSans-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'josefin_san';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'fira_mono'; }
`;


class Layout extends Component {
  render(){
      return(
        <ThemeProvider theme={theme}>
        <StyledPage>
            <GlobalStyles/>
            <Meta/>
            <InnerPage>{this.props.children}</InnerPage>
        </StyledPage>
       </ThemeProvider>
      )

  }

}


export default Layout;
