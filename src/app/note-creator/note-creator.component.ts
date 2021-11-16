import { Component, OnInit, Input } from '@angular/core';
import { NewNote } from '../note-cards/new-note.model';
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
@Input() newNotes: NewNote[] = [];

  constructor() {
  }

  ngOnInit() {
    
  }

  public SaveNote(titleModel: string, contentModel: string) {
    const newNote: NewNote = {
      title: titleModel,
      content: contentModel
    };
    console.log(titleModel, contentModel)
    this.newNotes.push(newNote);
    
  }

}