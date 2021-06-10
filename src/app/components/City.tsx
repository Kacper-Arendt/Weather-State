import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks";
import styled from "styled-components";
import {AiFillDelete, AiOutlineDelete} from "react-icons/ai";

import {removeCity, AddFetchedData} from '../../redux/city/citySlice'
import {IFetchedApiData, IProps} from '../Models/City'
import {device} from '../Models/MediaQueries'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 220px;
  margin: 20px;
  border: solid black 2px;
  background-color: RGBA(217, 190, 180, 0.8);
  font-size: 15px;

@media${device.mobileM} {
  width: 330px;
  font-size: 17px;
}
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(115, 86, 76, .8);

  img {
    width: 40px;
  }

@media${device.mobileM} {
  img {
    margin-right: 100px;
    width: 45px;
  }
}
`

const WeatherData = styled.div`
  width: 100%;
  padding: 10px 0 0 10px;

  p {
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 20px;
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
                <Wrapper>
                    <Header>
                        <h2>{apiData.name} </h2>
                        <img src={icon} alt="weather icon"/>
                        <Button
                            onClick={() => removeCityHandler(props.id)}><AiOutlineDelete size="24"/>
                        </Button>
                    </Header>
                    <WeatherData>
                        <p>Temp: {`${apiData.main.temp} °C`}</p>
                        <p>Conditions: {apiData.weather[0].description} </p>
                        <p>Wind: {apiData.wind.speed} m/s</p>
                        <p>Pressure: {`${apiData.main.pressure}  HPa`}</p>
                        <p>Humidity: {`${apiData.main.humidity}%`}</p>
                    </WeatherData>
                </Wrapper>
            )
        }
    }

    return (
        <>
            {fetchedData()}
        </>
    )
}