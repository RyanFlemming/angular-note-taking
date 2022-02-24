import { Subject } from "rxjs";

// Declare update method to be used by subjects
export interface Observer{
    update(subject: Subject<any>): void;
}