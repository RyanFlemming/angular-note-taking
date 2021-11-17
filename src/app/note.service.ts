import { Injectable, OnInit } from '@angular/core';
import { Note } from './note';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [];

  ngOnInit(){}

  constructor() { }

  addNote(title: string, content: string): void {
    const note: Note = {
      title: title,
      content: content
    };

    this.notes.push(note);
  }

  getNotes(): Note[] {
    return this.notes;
  }
}
