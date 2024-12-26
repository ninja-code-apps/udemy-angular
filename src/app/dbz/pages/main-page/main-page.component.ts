import { Component } from '@angular/core'
import { Character } from "../../interfaces/character"
import { DbzService } from "../../services/dbz.service"

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styles: ``
})
export class MainPageComponent {

    constructor(
        // [*] is recommend to set private, because if references MainPageComponent can access or call dbzService
        private dbzService: DbzService
    ) { }

    get characters(): Character[] {
        return this.dbzService.characters
    }

    addCharacter(character: Character): void {
        this.dbzService.addCharacter(character)
    }

    deleteCharacter(id: string) {
        this.dbzService.deleteCharacter(id)
    }

}
