import React, {useState} from "react";
import styled from 'styled-components'
import {FaSearch} from "react-icons/fa";

import {useAppDispatch} from "../hooks";
import {addCity} from "../../redux/city/citySlice";
import {device} from '../Models/MediaQueries'

const Form = styled.form`
  display: flex;
  flex-direction: row;
  height: 32px;
  justify-self: end;
  margin-right: 15px;
  font-size: 20px;

@media${device.mobileM} {
  width: 200px;
} @media${device.tablet} {
  width: 300px;
  height: 45px;
} @media${device.laptop} {
  width: 500px;
  height: 50px;
} @media${device.laptop} {
  justify-self: left;
}
`

const Input = styled.input`
  width: 75%;
  height: 100%;
  border-radius: 30px 0 0 30px;
  border: 0;
  outline: 0;
  background-color: #353b48;
  color: white;
  padding: 5px 0 5px 15px;
  font-size: inherit;
  font-weight: 600;
  letter-spacing: .07em;
  cursor: pointer;
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
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;

  :disabled {
    color: grey;
  }
  
  @media${device.laptop}{
  border-left: none;
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