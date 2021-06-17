import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'

import {AddCity} from "./components/AddCity";
import {Cities} from "./components/Cities";
import {device} from './Models/MediaQueries';
import background from './images/backgroundEarth.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    width: 100%;
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 100%;
    background-attachment: fixed;
    background-position: center;
    
  @media${device.laptop} {
    background-position: initial;
  }
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`

const Header = styled.header`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border-bottom: 2px solid black;
  background-color: rgba(136, 140, 140, .6);
@media${device.tablet} {
  border-width: 4px;
} @media${device.laptop} {
  grid-template-columns: 1fr 1fr 1fr;
}
`
const H1 = styled.h1`
  font-size: 18px;
  letter-spacing: 1px;
  padding: 5px 0 2px 7px;
  margin-left: 10px;

@media${device.tablet} {
  font-size: 30px;
}
`

function App() {
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