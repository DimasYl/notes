import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Note} from "../data/notes.type";
import {notes} from "../data/notes";

@Injectable()
export class MockApiService {

  public getNotes(): Observable<Note[]> {
    return of(notes)
  }
}
