import axios from 'axios';

export const Countries = async () => {
    const countries = await axios.get('https://restcountries.com/v3.1/all'); //https://countriesnow.space/api/v0.1/countries/population/cities
    const data = await countries.data;

    
    if (countries.status !== 200) {
        throw new Error(data.message || 'Error');
    }

    let unDuplicatedCountries = [];
    let countriesArray = [];

    for (let index = 0; index < data.length; index++) {
        unDuplicatedCountries.push(data[index].name.official);
        const duplicateCountries = unDuplicatedCountries
        unDuplicatedCountries = Array.from(new Set(duplicateCountries));
    }

    for (const country in unDuplicatedCountries) {
        const countryObj = {
            id: country,
            name: unDuplicatedCountries[country]
        }
        countriesArray.push(countryObj)
    }

    return countriesArray

}