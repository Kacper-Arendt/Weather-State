export const saveData = (favoritesCities: Array<string>): void => {
    if (favoritesCities) {
        let favArr: Array<string> = [];
        let fetchedCities: Array<string> = [];

        if (localStorage.getItem('favorites')) {
            fetchedCities = JSON.parse(localStorage.getItem('favorites')!)
        }

        favArr = Array.from(new Set(fetchedCities.concat(favoritesCities)));

        localStorage.setItem('favorites', JSON.stringify(favArr))
    }
}

export const deleteData = (city: string): void => {
    let fetchedArray: Array<string> = JSON.parse(localStorage.getItem('favorites')!);

    fetchedArray.splice(fetchedArray.indexOf(city), 1);

    localStorage.setItem('favorites', JSON.stringify(fetchedArray));
}