import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks";
import styled from "styled-components";

import {removeCity, AddFetchedData} from '../../redux/city/citySlice'
import {IFetchedApiData, IProps} from '../Models/City'

const Div = styled.div`
  margin: 30px;
  padding: 10px;
  width: 200px;
  border: solid black 2px;
`

export const City = (props: IProps) => {
    const dispatch = useAppDispatch();
    const [apiData, setApiData] = useState<IFetchedApiData>();
    const [error, setError] = useState();

    const apiKey = process.env["REACT_APP_API_KEY"];
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.name}&units=metric&appid=${apiKey}`;
    const icon = `http://openweathermap.org/img/wn/${apiData?.weather[0].icon}.png`

    const removeCityHandler = (id: string): void => {
        dispatch(removeCity(id))
    }

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                if (data.cod == 404) {
                    setError(data.message);
                    return;
                } else
                    setApiData(data)
                dispatch(AddFetchedData(data))
            })
            .catch((error) => {
                console.log(error)
            });
    }, [apiUrl])

    const fetchedData = () => {
        if (!error && apiData) {
            return (
                <Div>
                    <h2>{apiData.name}</h2>
                    <p>Temp: {`${apiData.main.temp} °C`}</p>
                    <p>Wind: {apiData.wind.speed} m/s</p>
                    <p>Pressure: {`${apiData.main.pressure}  HPa`}</p>
                    <p>Humidity: {`${apiData.main.humidity}%`}</p>
                    <div>
                        <img src={icon} alt="weather icon"/>
                        <p>Info: {apiData.weather[0].description} </p>
                    </div>
                    <button onClick={() => removeCityHandler(props.id)}>X</button>
                </Div>
            )
        }
    }

    return (
        <>
            {fetchedData()}
        </>
    )
}