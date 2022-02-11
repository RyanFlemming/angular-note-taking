import { Component, ViewChild} from '@angular/core';
import { NoteService } from '../services/note.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm){
    console.log("Note title is : " + form.value.title)
    console.log("Note content is: " + form.value.content)
    this.noteService.addNote(form.value.title, form.value.content);
  }

  // TO DO: Add an edit function

}