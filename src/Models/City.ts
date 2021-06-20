export interface ICity {
    id: string,
    searchedCity: string,
    isFetching?: boolean,
    fetchedData: IFetchedApiData,
    favorites: boolean,
    active: boolean
}

export interface IProps {
    id: string,
    name: string,
    favorites: boolean,
    active: boolean,
    addFav?: () => void
}

export interface IFetchedApiData {
    base: string,
    clouds: {},
    cod: number,
    coord: {},
    dt: number,
    id: number,
    main: IMainWeatherStats
    name: string,
    sys: {},
    weather: [{ description: string, humidity: string, icon: string }],
    wind: { speed: number }
}
export interface IMainWeatherStats {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}