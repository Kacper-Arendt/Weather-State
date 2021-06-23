import React from "react";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {useEffect} from "react";

import {City} from "./City";
import {device} from '../Models/MediaQueries'
import {Popup} from './UI/Popup';
import {setMessage} from '../redux/appSlice';
import {addCity} from "../redux/city/citySlice";

const Wrapper = styled.div`
  display: flex;
  width: 30rem;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  letter-spacing: 1.4px;

@media${device.tablet} {
  flex-direction: row;
  width: 60rem;
}

  h1 {
    width: 80%;
    margin-top: 2rem;
    text-align: center;
    justify-self: center;
    font-size: 1.5rem;
    color: white;
    text-transform: capitalize;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    animation-name: moveInLeft;
    animation-duration: 1s;

    @keyframes moveInLeft {
      0% {
        opacity: 0;
        transform: translateX(-20rem);
      }
      80% {
        transform: translateX(.5rem);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

  @media${device.tablet} {
    font-size: 2.5rem;
  }
  }
`

export const Cities = (): JSX.Element => {
    const {cities, app} = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('favorites')) {
            let fetchedArray: Array<string> = JSON.parse(localStorage.getItem('favorites')!);
            fetchedArray.map(city => {
                dispatch(addCity(city));
            })
        }
    }, []);

    const popupHandleClose = (): void => {
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
                    favorites={city.favorites}
                    name={city.searchedCity}
                    active={city.active}
                />
            )}
            {cities.length < 1 && <h1>Lets see whats going on there!</h1>}
        </Wrapper>
    )
}