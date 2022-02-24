import { Observer } from "rxjs";

// Contains state information that we want to notify observers about
export interface Subject {
    // Attach an observer
    attach(observer: Observer<any>) : void;

    // Detach observer; stop receiving notifications
    detach(observer: Observer<any>) : void;

    // Call update function for all observers
    notify (): void;
}