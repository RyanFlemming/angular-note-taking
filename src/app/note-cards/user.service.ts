import { Injectable } from '@angular/core';
import { Note } from './new-note.model';

@Injectable()
export class UserService {
    user: any;
    note!: Note[];
}