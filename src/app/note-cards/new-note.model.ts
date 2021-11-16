import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'any'
})
export class NewNote {
    title: string = '';
    content: string = '';
}