import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  position: relative;
  padding: 0  10px 0 10px;
  
  :after {
    content: "";
   position: absolute;
   width: 50%;
   height: 50%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   margin: auto;
   border: 4px solid transparent;
   border-top-color: #ffffff;
   border-radius: 50%;
   animation: button-loading-spinner 1s ease infinite;

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(2turn);
    }
`

export const Spinner = (): JSX.Element => {
    return (
        <Span></Span>
    );
}