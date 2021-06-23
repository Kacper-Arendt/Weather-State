import React, {useEffect} from 'react';
import {AiFillStar, AiOutlineDelete, AiOutlineStar} from 'react-icons/ai';
import styled from 'styled-components';

import {toggleFavorites} from '../../redux/city/citySlice';
import {addToFavCities, removeFromFav} from '../../redux/appSlice';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {deleteData, saveData} from '../LocalStorageHandler';

interface MenuProps {
    active: boolean
}

const Menu = styled.div<MenuProps>`
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(57, 57, 57, 0.9);
  text-align: center;
  list-style: none;
  opacity: ${(props: MenuProps) => props.active ? 1 : 0};
  visibility: ${(props: MenuProps) => props.active ? 'visible' : 'hidden'};
  transition: all 0.6s;

  a {
    cursor: pointer;
    display: inline-block;
    margin: 1rem;
    font-size: 3.5rem;
    transition: all 0.3s;
    transform: ${(props: MenuProps) => props.active ? 'rotate(360deg)' : null};

    :hover {
      transform: scale(1.1);
    }
  }
`

const BurgerIcon = styled.span<MenuProps>`
  position: relative;
  background-color: ${(props: MenuProps) => props.active ? 'transparent' : '#333'};
  z-index: 100;
  top: 0;
  right: .3rem;

  &,
  &::after,
  &::before {
    width: 2.5rem;
    height: 2px;
    display: inline-block;
    transition: all .5s;
  }

  &::before,
  &::after {
    background-color: ${(props: MenuProps) => props.active ? 'white' : '#333'};
    position: absolute;
    content: '';
    opacity: 1;
  }

  &::before {
    top: .5rem;
    transform: ${(props: MenuProps) => props.active ? 'rotate(405deg)  translateY(-.7rem)' : "transform: translateY(0)"}
  }

  &::after {
    top: -.5rem;
    transform: ${(props: MenuProps) => props.active ? 'rotate(-405deg)  translateY(.7rem)' : "transform: translateY(0)"}
  }
`

export interface IProps {
    id: string,
    name: string
    active: boolean,
    favorites: boolean,
    removeCityHandler: (id: string) => void,
}

export const CityMenu = (props: IProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const {app} = useAppSelector(state => state)

    useEffect(() => {
        saveData(app.favoritesCities);
    }, [app.favoritesCities]);

    useEffect(() => {
        if (localStorage.getItem('favorites')) {
            let fetchedArray: Array<string> = JSON.parse(localStorage.getItem('favorites')!);
            if (fetchedArray.includes(props.name)) {
                addToFav(props.id);
            }
        }
    }, [])

    const addToFav = (id: string): void => {
        dispatch(toggleFavorites(id))
        dispatch(addToFavCities(props.name))
    }

    const removeFromFavHandler = (id: string): void => {
        dispatch(removeFromFav(props.name));
        deleteData(props.name);
        dispatch(toggleFavorites(id))
    }

    return (
        <>
            <BurgerIcon active={props.active}></BurgerIcon>
            <Menu active={props.active}>
                <a>{props.favorites ?
                    <AiFillStar onClick={() => removeFromFavHandler(props.id)}/>
                    :
                    <AiOutlineStar onClick={() => addToFav(props.id)}/>}
                </a>
                <a onClick={() => props.removeCityHandler!(props.id)}><AiOutlineDelete></AiOutlineDelete></a>
            </Menu>
        </>
    )
}
