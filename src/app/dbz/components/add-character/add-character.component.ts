import { Component, EventEmitter, Output } from '@angular/core'
import { Character } from "./../../interfaces/character"

@Component({
    selector: 'app-add-character',
    templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter()

    character: Character = {
        id: "",
        name: "",
        race: "",
        power: 0,
    }

    emitCharacter() {
        this.onNewCharacter.emit({ ...this.character })
        this.character = {
            id: "",
            name: '',
            race: "",
            power: 0,
        }
    }
}
