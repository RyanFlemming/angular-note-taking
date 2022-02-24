import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [];

  ngOnInit() { }

  constructor() { }

  addNote(_title: string, _content: string): void {
    const note: Note = {
      id: '_' + Math.random().toString(36).substring(2, 9),
      title: _title,
      content: _content
    };

    this.notes.push(note);
  }

  getAllNotes(): Note[] {
    return this.notes;
  }

  /*
  Implement an 'update' function
  Use observer pattern and have note-creator respond to click events on the 'Edit' option
  Do lookup using id, send result to note-creator
  */
}
