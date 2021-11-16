import { Component, Input, Output, OnInit } from '@angular/core';
import { NewNote } from './new-note.model';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.css']
})
export class NoteCardsComponent implements OnInit {
@Input() newNotes: NewNote[] = [];
mySubscription: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}