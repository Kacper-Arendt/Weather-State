import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'

import {AddCity} from "./app/components/AddCity";
import {Cities} from "./app/components/Cities";
import {device} from './app/Models/MediaQueries';
import background from './images/background.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    background-image: url(${background});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
  grid-template-columns: 1fr 2fr;
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