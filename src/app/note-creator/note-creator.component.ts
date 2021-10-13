import { Component, OnInit } from '@angular/core';
import { NoteCardsComponent } from '../note-cards/note-cards.component';
/*
export class NewNote {
  title: string = '';
  content: string = '';
}
*/

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
titleModel: string = '';
contentModel: string = '';
childComponent = new NoteCardsComponent();

  constructor() {
  }

  ngOnInit() {
    
  }

  createNewNote(title: string, content: string){
    this.childComponent.SaveNote(title, content);
  }

}
