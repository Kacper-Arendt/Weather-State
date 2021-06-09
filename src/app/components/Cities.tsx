import React from "react";
import{ useAppSelector} from "../hooks";
import {City} from "./City";


export interface IMainWeatherStats {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}

export const Cities = () => {
    const {cities} = useAppSelector(state => state)

    return (
        <>
            {cities.map(city =>
                <City
                    key = {city.id}
                    id = {city.id}
                    name = {city.name}
                />
            )}
        </>
    )
}