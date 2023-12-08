import {ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import {Note} from "../../../data/notes.type";
import {SELECT_NOTE} from "../../services/injectors";
import {BehaviorSubject} from "rxjs";
import {DialogService} from "primeng/dynamicdialog";
import {AddNoteComponent} from "../modal/add-note.component";

@Component({
  selector: 'app-list-notes[notes]',
  templateUrl: './list-notes.component.html',
  styles: [
    `
      .host {
        ::ng-deep .p-card-component {
          margin: 1rem;
        }
      }

      .card {
        cursor: pointer;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService]
})
export class ListNotesComponent {
  @Input()
  public notes!: Note[] | null;

  constructor(@Inject(SELECT_NOTE) public selectNote: BehaviorSubject<Note | null>, private readonly dialog: DialogService) { }

  public trackByNotes(index: number, note: Note): number {
    return note?.id;
  }

  public onSelectNote(note: Note): void {
    if(this.selectNote?.value?.id === note.id) {
      this.selectNote.next(null)
    } else {
      this.selectNote.next(note)
    }
  }

  public addNote(): void {
    this.dialog.open(AddNoteComponent, {
      header: 'Добавление заметки',
      data: {
        notes: this.notes,
      }
    })
  }

  public removeNote(id: number): void {
    (<Note[] | undefined>this.notes) = this.notes?.filter(el => el.id !== id)
  }
}
