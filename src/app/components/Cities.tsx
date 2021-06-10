import React from "react";
import{ useAppSelector} from "../hooks";
import {City} from "./City";

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