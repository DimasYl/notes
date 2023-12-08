import {InjectionToken} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Note} from "../../data/notes.type";

export const SELECT_NOTE: InjectionToken<BehaviorSubject<Note>> = new InjectionToken<BehaviorSubject<Note>>('SELECT_NOTE')
