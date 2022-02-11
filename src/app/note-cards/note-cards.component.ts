import { Component, OnInit } from '@angular/core';
import { Note } from "../interfaces/note";
import { NoteService } from "../services/note.service";

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.css']
})
export class NoteCardsComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.notes = this.noteService.getAllNotes();
  }

  // TO DO: Create a user service. Make this talk to the note service.
}