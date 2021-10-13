import { Component, Input, Output, OnInit } from '@angular/core';
import { NewNote } from './new-note.model';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.css']
})
export class NoteCardsComponent implements OnInit {
  @Input() titleModel!: string;
  @Input() contentModel!: string;
  newNotes: NewNote[] = [];

  constructor(private newNote?: NewNote) {
  }

  ngOnInit(): void {
  }

  @Output() public SaveNote(title: string, content: string) {
    const newNote: NewNote = {
      title: this.titleModel,
      content: this.contentModel
    };
    console.log(title, content)
    this.newNotes.push(newNote);
    this.titleModel = this.contentModel = '';

  }

}