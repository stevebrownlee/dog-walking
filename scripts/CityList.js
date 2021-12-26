import { getCities } from "./database.js"

const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"

    // TODO: Alphabetize list of city name in ascending order
    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}