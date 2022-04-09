import { Injectable } from '@angular/core';
import {Filiere} from "../model/filiere.model";
import {Note} from "../model/note.model";
import {HttpClient} from "@angular/common/http";
import {Absence} from "../model/absence.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {


  private _note : Note;
  private _notes : Array<Note>;
  private _index:number;

  constructor(private http :HttpClient ) {}

  public save(){
    if(this.note.id== null) {
      this.http.post('http://localhost:8080/api/gestion/note/',this.note).subscribe(
        data=>{
          if(data>0){
            this.notes.push({...this.note});   // clone
            alert('note added Succesfully');
            this.findAll();
            this.note=null;
          }else if(data==-1){
            alert('note already exist');
          }
        }
      );
    }
  }

  public findAll(){
    this.http.get<Array<Note>>('http://localhost:8080/api/gestion/note/').subscribe(
      data=> {
        this.notes = data;
      },error => {
        console.log(error);
      }
    );
  }

  public update(index:number,note:Note)
  {
    this.note = {...this.notes[index]};
    this._index=index;
  }



  get note(): Note {
    if (this._note == null){
      this._note = new Note();
    }
    return this._note;
  }

  set note(value: Note) {
    this._note = value;
  }

  get notes(): Array<Note> {
    if (this._notes == null){
      this._notes = new Array<Note>();
    }
    return this._notes;
  }

  set notes(value: Array<Note>) {
    this._notes = value;
  }
}
