import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Character } from "../../interfaces/character"

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrl: `./character-list.component.css`
})
export class CharacterListComponent {

    @Input()
    characters: Character[] = []

    @Output()
    onDeleteCharacter: EventEmitter<string> = new EventEmitter()

    delete(id: string): void {
        this.onDeleteCharacter.emit(id)
    }

}
