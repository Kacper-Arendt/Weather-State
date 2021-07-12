import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'

import {AddCity} from "./components/AddCity";
import {Cities} from "./components/Cities";
import {device} from './Models/MediaQueries';
import background from './images/backgroundEarth.jpg';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    width: 100%;
    height: 100%;
    ${background}-size: cover;
    background: url(${background}) no-repeat fixed center;

  @media${device.mobileM} {
    font-size: 81.25%;
  }
  }

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`

const Header = styled.header`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border-bottom: .2rem solid black;
  background-color: rgba(136, 140, 140, .6);

@media${device.tablet} {
} @media${device.tablet} {
  grid-template-columns: 1fr 1fr 1fr;
}
`
const H1 = styled.h1`
  font-size: 1.8rem;
  letter-spacing: .1rem;
  padding: 5px 0 2px 7px;
`

function App(): JSX.Element {
    return (
        <>
            <GlobalStyle/>
            <Header>
                <H1>Weather<br/> State</H1>
                <AddCity/>
            </Header>
            <Cities/>
        </>
    );
}

export default App;