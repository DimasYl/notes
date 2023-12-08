import {Component, Inject} from '@angular/core';
import {SELECT_NOTE} from "../../services/injectors";
import {BehaviorSubject} from "rxjs";
import {Note} from "../../../data/notes.type";

@Component({
  selector: 'app-description-note',
  templateUrl: './description-note.component.html',
  styles: [`
  .header {
  color: #1185ab;
}

  `]
})
export class DescriptionNoteComponent {
  constructor(@Inject(SELECT_NOTE) public selectNote: BehaviorSubject<Note>) { }
}
