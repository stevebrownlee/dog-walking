import { getCities, getPets, getWalkerCities, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const assignments = getWalkerCities()
const cities = getCities()

// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        const firstMatch = assignments.find(a => a.walkerId === currentPetWalker.id)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${
                    cities.find(city => city.id === firstMatch.cityId).name
                }
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}