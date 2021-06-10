import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import {AddCity} from "./app/components/AddCity";
import {Cities} from "./app/components/Cities";
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
const H1 = styled.h1`
  font-size: 18px;
  letter-spacing: 1px;
  padding: 5px;
  border-bottom: 2px solid black;
`

function App() {
    return (
        <>
            <GlobalStyle/>
            <H1>Weather State</H1>
            <AddCity/>
            <Cities/>
        </>
    );
}

export default App;
