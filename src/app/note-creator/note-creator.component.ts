import { Component, Input, ViewChild} from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../interfaces/note';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
  @Input() _notes: Note[] = [];
  
  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    
  }

  private _getAllNotes(): void {
    this._notes = this.noteService.getAllNotes();
  }

  onSubmit(form: NgForm){
    console.log("Note title is : " + form.value.title)
    console.log("Note content is: " + form.value.content)
    this.noteService.addNote(form.value.title, form.value.content);
    this._getAllNotes();
  }

  // TO DO: Add an edit function

}