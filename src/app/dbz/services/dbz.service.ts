import { Injectable } from '@angular/core'
import { Character } from "../interfaces/character"
import { v4 as uuid } from "uuid"

@Injectable({
    providedIn: 'root' // convert to Singleton this service
})
export class DbzService {

    constructor() { }

    characters: Character[] = [
        {
            id: uuid(),
            name: "Goku",
            race: "Saiyajin",
            power: 9000
        },
        {
            id: uuid(),
            name: "Trunks",
            race: "Saiyajin",
            power: 4500
        },
        {
            id: uuid(),
            name: "Vegeta",
            race: "Saiyajin",
            power: 8000
        },
    ]

    addCharacter(character: Character): void {
        character.id = uuid()
        this.characters.push(character)
    }

    deleteCharacter(id: string) {
        this.characters = this.characters.filter(item => item.id != id)
    }

}
