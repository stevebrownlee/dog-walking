import { getCities } from "./database.js"



export const CityList = () => {
    const cities = getCities()

    let citiesHTML = "<ul>"

    // TODO: Alphabetize list of city name in ascending order
    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}