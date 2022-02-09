import { Component, Input, OnInit } from '@angular/core';
import { Note } from "../interfaces/note";
import { NoteService } from "../services/note.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() notes: Note[] = [];

  constructor(private noteService: NoteService) {
  }


  // TO DO: Create a user service. Make this talk to the note service.
}