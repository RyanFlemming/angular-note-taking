import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NewNote {
    title: string = '';
    content: string = '';
}