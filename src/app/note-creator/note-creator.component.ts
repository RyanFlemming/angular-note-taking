import { Component, Output } from '@angular/core';

export class NewNote {
  title: string = '';
  content: string = '';
}

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
  @Output() titleModel: string = '';
  @Output() contentModel: string = '';
  newNotes: NewNote[];

  constructor() {this.titleModel = '';
    this.contentModel = '';

    const defaultNote: NewNote = {
      title: 'Note title',
      content: 'Content here'
    }

    this.newNotes = [defaultNote];
  }

  createNewNote(title: string, content: string){
    const newNote: NewNote = {
      title: this.titleModel,
      content: this.contentModel
    };
    console.log(title, content)
    this.newNotes.push(newNote);
    this.titleModel = this.contentModel = '';
  }

}
