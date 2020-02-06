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
    font-family: 'Fira-Mono-Regular';
    src: url('../static/FiraMono-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Josefin-Sans-Regular';
    src: url('../static/JosefinSans-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

              /* Box sizing rules */
              *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            /* Remove default padding */
            ul[class],
            ol[class] {
              padding: 0;
            }

            /* Remove default margin */
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            ul[class],
            ol[class],
            li,
            figure,
            figcaption,
            blockquote,
            dl,
            dd {
              margin: 0;
            }

            /* Set core body defaults */
            body {
              min-height: 100vh;
              scroll-behavior: smooth;
              text-rendering: optimizeSpeed;
              line-height: 1.5;
              font-family: 'Josefin-Sans-Regular';
            }

            /* Remove list styles on ul, ol elements with a class attribute */
            ul[class],
            ol[class] {
              list-style: none;
            }

            /* A elements that don't have a class get default styles */
            a:not([class]) {
              text-decoration-skip-ink: auto;
            }

            /* Make images easier to work with */
            img {
              max-width: 100%;
              display: block;
            }

            /* Natural flow and rhythm in articles by default */
            article > * + * {
              margin-top: 1em;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
              font: inherit;
            }

            /* Remove all animations and transitions for people that prefer not to see them */
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
        a {
          text-decoration: none;
          color: ${theme.black};
        }
        button {   font-family: 'Fira-Mono-Regular'; }
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
