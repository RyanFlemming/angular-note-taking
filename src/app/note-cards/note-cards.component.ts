import { Component, Input, Output, OnInit } from '@angular/core';


import { Note } from "../note";
import { NoteService } from "../note.service";

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
    this.notes = this.noteService.getNotes();
  }

}