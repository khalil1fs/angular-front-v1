import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Filiere} from "../model/filiere.model";
import {Prof} from "../model/prof.model";

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http:HttpClient) { }

  private _prof : Prof;
  private _profs : Array<Prof>;
  private _index:number;

  public save(){
    if(this.prof.id== null) {
      this.http.post('http://localhost:8080/api/gestion/prof/',this.prof).subscribe(
        data=>{
          if(data>0){
            this.profs.push({...this.prof});   // clone
            alert('prof added Succesfully');
            this.findAll();
            this.prof=null;
          }else if(data==-2 || data==-3){
            alert('prof already exist');
          }else if(data==-4){
            alert('Departemeent doesn\'t exist');
          }else if(data==-5){
            alert('email already exist');
          }
        }
      );
    }
  }

  public findAll(){
    this.http.get<Array<Prof>>('http://localhost:8080/api/gestion/prof/').subscribe(
      data=> {
        this.profs = data;
      },error => {
        console.log(error);
      }
    );
  }

  public update(index:number,prof:Prof)
  {
    this.prof = {...this.profs[index]};
    this._index=index;
  }



  get profs(): Array<Prof> {
    if (this._profs == null){
      this._profs = new Array<Prof>();
    }
    return this._profs;
  }
  set profs(value: Array<Prof>) {
    this._profs = value;
  }


  get prof(): Prof {
    if (this._prof == null){
      this._prof = new Prof();
    }
    return this._prof;
  }

  set prof(value: Prof) {
    this._prof = value;
  }
}
