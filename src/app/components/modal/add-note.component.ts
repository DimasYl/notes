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
      <small *ngIf="nameNote?.errors?.['error']">{{nameNote?.errors?.['error']}}</small>
      <small *ngIf="nameNote?.dirty && nameNote?.errors?.['required']">Пустое значение</small>
      <button pButton (click)="save()" label="Сохранить" [disabled]="nameNote.invalid"></button>
    </div>
  `
})

export class AddNoteComponent {
  public nameNote = new FormControl('', [Validators.required, creatDateRangeValidator(this.dialogConfig.data.notes)])

  constructor(private readonly dialogConfig: DynamicDialogConfig, private readonly dialogRef: DynamicDialogRef) {
    console.log(dialogConfig)
  }

  public save(): void {
    this.dialogRef.close(this.nameNote.value)
  }
}

export function creatDateRangeValidator(notes: Note[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value && notes.map(el => el.name.trim() === control.value.trim()).some(el => el)) {
      return { error: 'Такая заметка уже есть'}
    }
    return null;
  }
}
