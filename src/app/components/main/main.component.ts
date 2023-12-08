import { Component, OnInit } from '@angular/core';
import {MockApiService} from "../../../api/mock-api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Note} from "../../../data/notes.type";
import {SELECT_NOTE} from "../../services/injectors";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      .main {
        display: flex;
        flex-direction: row;
      }

      .host {
        ::ng-deep .p-card-body {
          height: 70vh !important;
        }
      }
    `
  ],
  providers: [MockApiService,
    { provide: SELECT_NOTE, useValue: new BehaviorSubject(null)}
  ]
})
export class MainComponent implements OnInit {

  public notes: Observable<Note[]> = new Observable<Note[]>()

  constructor(private readonly mockApi: MockApiService) { }

  ngOnInit(): void {
    this.notes = this.mockApi.getNotes()
  }

}
