import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import styled from "styled-components";
import {AiOutlineDelete, AiFillStar, AiOutlineStar} from "react-icons/ai";

import {removeCity, AddFetchedData, addToFavorites, setActive} from '../redux/city/citySlice';
import {changeStatus, setMessage} from '../redux/appSlice';
import {ICity, IFetchedApiData, IProps} from '../Models/City';
import {device} from '../Models/MediaQueries';
import {Status} from "../Models/App";
import {CityMenu} from "./UI/CityMenu";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 23rem;
  height: 22rem;
  margin: 2rem;
  border: solid black .2rem;
  background-color: rgba(53, 59, 72, .9);
  color: white;
  font-size: 1.5rem;
  transition: all 0.5s;
  position: relative;

  :hover {
    box-shadow: 2px 2px 1.5rem #000;
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
  max-height: 5rem;
  background-color: rgba(157, 118, 61, 0.8);

  h2 {
    margin: 0 .5rem;
    padding-left: 1rem;
  }

  img {
    width: 5rem;
  }
`

const A = styled.a`
  position: absolute;
  top: .8rem;
  right: .5rem;
  width: 4.2rem;
  height: 3.5rem;
  z-index: 200;
  background-color: transparent;
`

const WeatherData = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 1.5rem;

  p {
    letter-spacing: .25rem;
    margin-bottom: .6rem;
  }
`

export const City = (props: IProps) => {
    const dispatch = useAppDispatch();
    const {cities, app} = useAppSelector(state => state)
    const [apiData, setApiData] = useState<IFetchedApiData>();
    const [error, setError] = useState();
    const [favorite, setFavorite] = useState(false);

    const apiKey = process.env["REACT_APP_API_KEY"];
    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${props.name}&units=metric&&exclude=hourly&appid=${apiKey}`;
    const icon = `http://openweathermap.org/img/wn/${apiData?.weather[0].icon}.png`

    const removeCityHandler = (id: string): void => {
        dispatch(removeCity(id))
    }
    const addToFav = () => {
        setFavorite(true);
    }

    const showId = (id: string) => {
        dispatch(setActive(id))
    }

    const removeFromFav = () => {
        setFavorite(false);
        if (apiData) {
            localStorage.removeItem(`favorite ${apiData.name}`)
        }
    }

    useEffect(() => {
        dispatch(changeStatus(Status.Fetching))
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                if (data.cod == 404) {
                    setError(data.message);
                    dispatch(changeStatus(Status.Idle))
                    dispatch(setMessage(data.message))
                    return;
                } else
                    setApiData(data)
                dispatch(AddFetchedData(data) && changeStatus(Status.Idle))
            })
            .catch((error) => {
                console.log(error)
            });
    }, [apiUrl])

    const fetchedData = () => {
        if (!error && apiData) {
            return (
                <>
                    <Wrapper>
                        <Header>
                            <h2>{apiData.name} </h2>
                            <img src={icon} alt="weather icon"/>
                            <A onClick={() => showId(props.id)}/>
                            <CityMenu
                                id={props.id}
                                favorite={favorite}
                                active={props.active}
                                addToFav={() => addToFav()}
                                removeFromFav={() => removeFromFav()}
                                removeCityHandler={(id) => removeCityHandler(id)}
                            />
                        </Header>
                        <WeatherData>
                            <p>Temp: {`${apiData.main.temp} °C`}</p>
                            <p>Conditions: {apiData.weather[0].description} </p>
                            <p>Wind: {apiData.wind.speed} m/s</p>
                            <p>Pressure: {`${apiData.main.pressure}  HPa`}</p>
                            <p>Humidity: {`${apiData.main.humidity}%`}</p>
                        </WeatherData>
                    </Wrapper>
                </>
            )
        }
    }

    return (
        <>
            {fetchedData()}
        </>
    )
}

