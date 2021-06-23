import React, {useState} from "react";
import styled from 'styled-components';
import {FaSearch} from "react-icons/fa";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {addCity} from "../redux/city/citySlice";
import {device} from '../Models/MediaQueries';
import {Spinner} from './UI/Spinner';
import {Status} from '..//Models/App';

const Form = styled.form`
  width: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: center;
  height: 3.2rem;
  margin-right: 1.5rem;
  font-size: 2rem;

@media${device.tablet} {
  justify-self: center;
  margin-right: 0;
  width: 30rem;
  font-size: 1.5rem;
}
`

const Input = styled.input`
  width: 75%;
  height: 100%;
  border-radius: 3rem 0 0 3rem;
  border: 0;
  outline: 0;
  background-color: #353b48;
  color: white;
  padding: .5rem 0 .5rem 1.5rem;
  font-size: inherit;
  font-weight: 600;
  letter-spacing: .07em;
  cursor: pointer;
`

const Button = styled.button`
  height: 100%;
  padding: 0 1.5rem;
  outline: 0;
  border-radius: 0 3rem 3rem 0;
  border: none;
  background-color: #353b48;
  color: white;
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;

  :disabled {
    color: grey;
  }
`

export const AddCity = (): JSX.Element => {
    const {app} = useAppSelector(state => state);
    const [city, setCity] = useState<string>('');
    const dispatch = useAppDispatch();

    const cityHandler = (e: React.SyntheticEvent): void => {
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
                onClick={cityHandler}>
                {app.status === Status.Fetching ? <Spinner/> : <FaSearch></FaSearch>}
            </Button>
        </Form>
    )
}