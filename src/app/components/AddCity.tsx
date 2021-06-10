import React, {useState} from "react";
import styled from 'styled-components'

import {useAppDispatch} from "../hooks";
import {addCity} from "../../redux/city/citySlice";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 5px;
`

const Input = styled.input`
  width: 100px;
  margin: 0 10px;
  font-size: 15px;
  padding: 1px;
  border: black solid 2px;
  border-radius: 7%;
  background-color: #FBC926;
  color: white;
  
  &:focus{
    background-color: #A69D1Fs;
  }
  
  ::placeholder{
    
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
            <button
                disabled={!city}
                onClick={cityHandler}>Check
            </button>
        </Form>
    )
}