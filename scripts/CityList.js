import { getWalkers } from "./database.js"

const walkers = getWalker()


export const CityList = () => {
    let citiesHTML = "<ol>"

    // TODO: Alphabetize list of city name in ascending order
    for (const walker of walkers) {
        citiesHTML += `<li>${currentWalker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}