import React, {useState} from "react";
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";

import {useAppDispatch} from "../hooks";
import {addCity} from "../../redux/city/citySlice";
import {device} from '../Models/MediaQueries'

const Form = styled.form`
  justify-self: end;
  display: flex;
  flex-direction: row;
  height: 32px;
  margin-right: 15px;
  
  @media${device.mobileM} {
}
`

const Input = styled.input`
  width: 100px;
  height: 100%;
  border-radius: 30px 0 0 30px;
  border: 0;
  outline: 0;
  background-color: #353b48;
  color: white;
  padding: 3px 0 3px 15px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .07em;
`

const Button = styled.button`
  height: 100%;
  padding: 0 15px;
  border: 0;
  outline: 0;
  border-left: solid 2px black;
  border-radius: 0 30px 30px 0;
  background-color: #353b48;
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .08em;
  cursor: pointer;
  
  :disabled{
    color: grey;
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
                onClick={cityHandler}><FaSearch></FaSearch>
            </Button>
        </Form>
    )
}