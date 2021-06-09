import {useState} from "react";
import axios from "axios";

export const FetchData = (city: string) => {
    const [apiData, setApiData] = useState({});
    const [state, setState] = useState(city);

    const apiKey = process.env["REACT_APP_API_KEY "];
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

    axios.get(apiUrl).then(function (res){
        setApiData(res)
        console.log(apiData);
    })
}