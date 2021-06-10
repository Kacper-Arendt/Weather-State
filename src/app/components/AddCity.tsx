import React, {useState} from "react";
import styled from 'styled-components'

import {useAppDispatch} from "../hooks";
import {addCity} from "../../redux/city/citySlice";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin: 8px;
  padding: 2px;
`

const Input = styled.input`
  font-size: 15px;
  padding: 2px;
  border: 1px solid black;
  background-color: RGBA(251, 201, 38, 0.6);
  max-width: 110px;
  
  &:focus{
    background-color: RGBA(251, 201, 38, 0.9);
    outline: none;
  }
`

const Button = styled.button `
  margin-right: 15px;
  padding: 2px 5px;
  border: 1px solid black;
  background-color: RGBA(251, 201, 38, 0.6);
  color: black;
  font-weight: bold;
  
  :active{
    background-color: RGBA(251, 201, 38, 0.9);
    transform: translateX(4px);
  }
  :disabled{
    color: grey;
    background-color: RGBA(251, 201, 38, 0.3);
  }
`

export const AddCity = (): JSX.Element => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch()

    const cityHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(addCity(city));
        setCity('');
    }

    return (
        <Form>
            <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button
                disabled={!city}
                onClick={cityHandler}>Check
            </Button>
        </Form>
    )
}