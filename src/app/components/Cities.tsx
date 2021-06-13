import React from "react";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../hooks";

import {City} from "./City";
import {device} from '../Models/MediaQueries'
import {Status} from '../Models/App';
import {Popup} from './UI/Popup';
import {setMessage} from '../../redux/appSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

@media${device.mobileM} {
  margin-top: 40px;
} @media${device.laptopL} {
  flex-direction: row;
}
`

export const Cities = () => {
    const {cities, app} = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    const popupHandleClose = () => {
        dispatch(setMessage(null));
    }

    return (
        <Wrapper>
            {app.message ?
                <Popup content={app.message} handleClose={() => popupHandleClose()}/>
                :
                null}
            {cities.map(city =>
                <City
                    key={city.id}
                    id={city.id}
                    name={city.searchedCity}
                />
            )}
        </Wrapper>
    )
}