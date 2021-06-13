import React from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Div = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  div {
    width: 55%;
    max-width: 450px;
    max-height: 70vh;
    margin: 0 auto;
    margin-top: 20vh;
    padding: 20px;
    border: 2px solid black;
    border-radius: 4px;
    text-align: center;
    background: #fff;
    overflow: auto;
    text-transform: capitalize;
    cursor: pointer;
    text-wrap: none;
  }
`

interface IProps {
    content?: string,
    handleClose?: () => void
}

export const Popup = (props: IProps): JSX.Element => {
    return (
        <Div onClick={props.handleClose}>
            <div>
                <h3>{props.content}</h3>
            </div>
        </Div>
    )
}