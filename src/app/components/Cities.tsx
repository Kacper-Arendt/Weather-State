import React from "react";
import styled from "styled-components";
import {useAppSelector} from "../hooks";

import {City} from "./City";
import {device} from '../Models/MediaQueries'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

@media${device.mobileM} {
  margin-top: 40px;
}
`

export const Cities = () => {
    const {cities} = useAppSelector(state => state)

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