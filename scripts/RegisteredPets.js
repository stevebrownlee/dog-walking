import { getPets, getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {

                    let assignedWalker = {name: ""};
                    for (const walker of walkers) {
                        if (walker.id === pet.walkerId) {
                            assignedWalker = walker
                        }
                    }
                    // const assignedWalker = walkers.find(walker => walker.id === pet.walkerId)
                    window.alert(`${pet.name} is being walked by ${assignedWalker.name}`)
                }
            }
        }
    }
)

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}