import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../controller/service/note.service";
import {Note} from "../../controller/model/note.model";
import {Departement} from "../../controller/model/departement.model";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  get notes(): Array<Note> {
    return this.noteService.notes;
  }


  public update(index:number,s:Note){
    this.noteService.update(index,s);
  }

  public delete(index:number){
    this.notes.splice(index,1);
  }

  ngOnInit(): void {
    this.noteService.findAll();
  }

}
