import { getCities, getWalkerCities, getWalkers } from "./database.js"

const cities = getCities()
const walkerCities = getWalkerCities()

const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects

    // Iterate the array value of walkerCities

    // Check if the primary key of the walker equals the foreign key on the assignment

    // If it does, add the current object to the array of assignments

    // After the loop is done, return the assignments array
    const assignments = []

    for (const assignment of walkerCities) {
        if (assignment.walkerId === walker.id) {
            assignments.push(assignment)
        }
    }

    return assignments
}

const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities

    // Iterate the array of assignment objects

    // For each assignment, iterate the cities array to find the match

    // Add the name of the matching city to the array of city names
    let cityNames = ""

    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                cityNames = `${cityNames} and ${city.name}`
            }
        }
    }

    return cityNames
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)

                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)

const walkers = getWalkers()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}