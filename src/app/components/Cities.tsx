import React from "react";
import styled from "styled-components";
import {useAppSelector} from "../hooks";

import {City} from "./City";
import {device} from '../Models/MediaQueries'
import {Status} from '../Models/App';

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

    return (
        <Wrapper>
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