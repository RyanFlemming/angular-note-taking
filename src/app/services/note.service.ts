import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [];

  ngOnInit() { }

  constructor() { }

  addNote(title: string, content: string): void {
    const note: Note = {
      title: title,
      content: content
    };

    this.notes.push(note);
  }

  getAllNotes(): Note[] {
    return this.notes;
  }

  /* printNotes(): void {
    for (var index in this.notes) {
      console.log(this.notes[index]);
    }
  } */

  // TO DO: Add categories to notes
  // TO DO: Return note to edit to calling function - in note-creator
}
