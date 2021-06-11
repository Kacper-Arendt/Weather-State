import React, {useState} from "react";
import styled from 'styled-components'

import {useAppDispatch} from "../hooks";
import {addCity} from "../../redux/city/citySlice";
import {device} from '../Models/MediaQueries'

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-self: center;
  
  @media${device.laptop} {
  height: 45px;
}
`

const Input = styled.input`
  font-size: 15px;
  border: 1px solid black;
  background-color: RGBA(251, 201, 38, 0.6);
  max-width: 110px;
  padding: 10px;
  
  &:focus{
    background-color: RGBA(251, 201, 38, 0.9);
    outline: none;
  }
  
  @media${device.tablet}{
  max-width: 200px;
  font-size: 28px;
}
  @device${device.laptop} {
  border-width: 3px;
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
  
  @media${device.tablet}{
  font-size: 25px;
}
@device${device.laptop} {
  border-width: 3px;
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