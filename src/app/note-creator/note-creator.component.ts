import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from "../note.service";

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
titleModel: string = '';
contentModel: string = '';

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    
  }

  public SaveNote(title: string, content: string) {
    this.noteService.addNote(title, content);
  }

}