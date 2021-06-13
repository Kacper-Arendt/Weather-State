import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks";
import styled from "styled-components";
import {AiOutlineDelete} from "react-icons/ai";

import {removeCity, AddFetchedData} from '../../redux/city/citySlice'
import {IFetchedApiData, IProps} from '../Models/City'
import {device} from '../Models/MediaQueries'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 220px;
  margin: 20px;
  border: solid black 2px;
  background-color: rgba(53, 59, 72, .9);
  color: white;
  font-size: 15px;
  transition: all .2s ease-in-out;

  :hover {
    button {
      visibility: visible;
    }

    transform: scale(1.01);
  }

@media${device.mobileM} {
  width: 300px;
  font-size: 17px;
} @media${device.tablet} {
  width: 550px;
  font-size: 21px;
  margin-bottom: 40px;
  border-width: 3px;
} @media${device.laptopL} {
  width: 550px;
}
`

const Header = styled.header`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(157, 118, 61, 0.8);

  h2 {
    margin: 0 5px;
    padding-left: 10px;
  }

  img {
    width: 40px;
  }

@media${device.mobileM} {
  img {
    width: 45px;
  }

@media${device.tablet} {
  img {
    width: 65px;
  }
}
}
`

const WeatherData = styled.div`
  width: 100%;
  padding: 10px 0 10px 15px;

  p {
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
`

const Button = styled.button`
  visibility: hidden;
  justify-self: center;
  padding: 2px 2px;
  width: 50px;
  border: solid black 2px;
  border-radius: 2em;
  background-color: white;
  transition: all 0.5s;
  font-size: 3vh;
  webkit-transition: visibility 0s, opacity 0.5s linear;
  transition: visibility 0.2s, opacity 0.5s linear;

  :hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    background-color: #D93030;
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
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
                            onClick={() => removeCityHandler(props.id)}><AiOutlineDelete/>
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