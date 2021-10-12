import { Component, Input, OnInit } from '@angular/core';

export class NewNote {
  title: string = '';
  content: string = '';
}

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.css']
})
export class NoteCardsComponent implements OnInit {
//note: NewNote = new NewNote;
/*
titleModel: string = '';
contentModel: string = '';
*/

@Input() newNotes!: NewNote[];

  constructor() {
  }

  ngOnInit(): void {
  }

}