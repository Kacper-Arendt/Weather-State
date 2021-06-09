import React, {useState} from "react";
import {useAppDispatch} from "../hooks";
import {addCity} from "../../features/city/citySlice";

export const AddCity = (): JSX.Element => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch()

    const cityHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(addCity(city));
        setCity('');
    }

    return (
        <form action="">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                disabled={!city}
                onClick={cityHandler}>Check
            </button>
        </form>
    )
}