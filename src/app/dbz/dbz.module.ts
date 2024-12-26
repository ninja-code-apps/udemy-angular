import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MainPageComponent } from './pages/main-page/main-page.component'
import { CharacterListComponent } from './components/character-list/character-list.component'
import { AddCharacterComponent } from './components/add-character/add-character.component'
import { FormsModule } from "@angular/forms"

@NgModule({
    declarations: [
        MainPageComponent,
        CharacterListComponent,
        AddCharacterComponent,
    ],
    exports: [
        MainPageComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
    ]
})
export class DbzModule { }
