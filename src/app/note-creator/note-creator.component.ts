import { Component, Input, ViewChild} from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../interfaces/note';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
  @Input() _notes: Note[] = [];
  createNote: boolean = true;

  
  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    
  }

  private _getAllNotes(): void {
    this._notes = this.noteService.getAllNotes();
    console.log(this._notes)
  }

  onSubmit(form: NgForm){
    console.log("Note title is : " + form.value.title)
    console.log("Note content is: " + form.value.content)
    this.noteService.addNote(form.value.title, form.value.content);
    this._getAllNotes();
  }

  /*
  Subscribe to 'update' observable on note service
  Set createNote boolean to false
  */

}