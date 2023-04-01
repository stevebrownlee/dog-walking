import { getPets, getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        // HTML click event target
        const itemClicked = clickEvent.target

        // Did the user click on a pet <li>?
        if (itemClicked.id.startsWith("pet")) {

            // What is the primary key of the clicked pet?
            const [,petPrimaryKey] = itemClicked.id.split("--") // "4"

            // Find the whole pet object to get the name
            let matchingPet = null
            for (const pet of pets) {
                if (parseInt(petPrimaryKey) === pet.id) {
                    matchingPet = pet
                }
            }


            // Find the related walker object assigned to the pet
            const walkers = getWalkers()
            let matchingWalker = null
            for (const walker of walkers) {
                if (matchingPet.walkerId === walker.id) {
                    matchingWalker = walker
                }
            }

            window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
        }
    }
)


export const RegisteredPets = () => {
    const pets = getPets()

    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}