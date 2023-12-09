import {Component} from "@angular/core";
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Note} from "../../../data/notes.type";

@Component({
  selector: 'add-list',
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <label for="name">Введите наименование заметки</label>
      <input pInputText id="name" [formControl]="nameNote">
      <small *ngIf="nameNote?.errors?.['error']" [style.color]="'red'">{{nameNote?.errors?.['error']}}</small>
      <small *ngIf="nameNote?.dirty && nameNote?.errors?.['required']" [style.color]="'red'">Пустое значение</small>
      <button pButton (click)="save()" label="Сохранить" [disabled]="nameNote.invalid"></button>
    </div>
  `
})

export class AddNoteComponent {
  public nameNote = new FormControl('', [Validators.required, createDuplicateNoteValidator(this.dialogConfig.data.notes)])

  constructor(private readonly dialogConfig: DynamicDialogConfig, private readonly dialogRef: DynamicDialogRef) {
  }

  public save(): void {
    this.dialogRef.close(this.nameNote.value)
  }
}

export function createDuplicateNoteValidator(notes: Note[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value && notes.some(el => el.name.trim() === control.value.trim())) {
      return { error: 'Такая запись уже существует'}
    }
    return null;
  }
}
