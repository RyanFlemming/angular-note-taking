import { Component, Input, OnInit } from '@angular/core';
import { Note } from "../interfaces/note";
import { NoteService } from "../services/note.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() notes: Note[] = [];

  constructor(private noteService: NoteService) {
  }
}