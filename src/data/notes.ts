import {Note} from "./notes.type";

let mockText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
  'Commodi consequuntur corporis cum deleniti, dolorem' +
'  dolorum ea eveniet iure laudantium maiores molestias natus non odit officiis porro recusandae soluta veniam voluptate.'

export const notes: Note[] = [
  {id: 1, name: 'Заметка 1', description: `Тестовое описание Заметки 1 ${mockText}`},
  {
    id: 2,
    name: 'Заметка 2',
    description: `Тестовое описание Заметки 2 ${mockText}`
  },
  {
    id: 3,
    name: 'Заметка 3',
    description: `Тестовое описание Заметки 3 ${mockText}`
  },
  {
    id: 4,
    name: 'Заметка 4',
    description: `Тестовое описание Заметки 4 ${mockText}`
  },
  {
    id: 5,
    name: 'Заметка 5',
    description: `Тестовое описание Заметки 5 ${mockText}`
  },
  {
    id: 6,
    name: 'Заметка 6',
    description: `Тестовое описание Заметки 6 ${mockText}`
  },
  {
    id: 7,
    name: 'Заметка 7',
    description: `Тестовое описание Заметки 7 ${mockText}`
  },
];

