import { Injectable } from '@angular/core';
import {Filiere} from "../model/filiere.model";
import {Student} from "../model/student.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FiliereService{

  constructor(private http:HttpClient) { }

  private _filiere : Filiere;
  private _filieres : Array<Filiere>;
  private _index:number;

  public save(){
    if(this.filiere.id== null) {
      this.http.post('http://localhost:8080/api/gestion/filiere/',this.filiere).subscribe(
        data=>{
          if(data>0){
            this.filieres.push({...this.filiere});   // clone
            alert('filiere added Succesfully');
            this.findAll();
            this.filiere=null;
          }else if(data==-1){
            alert('filiere already exist');
          }
        }
      );
    }
  }

  public findAll(){
    this.http.get<Array<Filiere>>('http://localhost:8080/api/gestion/filiere/').subscribe(
      data=> {
        this.filieres = data;
      },error => {
        console.log(error);
      }
    );
  }

  public update(index:number,filiere:Filiere)
  {
    this.filiere = {...this.filieres[index]};
    this._index=index;
  }


  get filiere(): Filiere {
    if (this._filiere == null){
      this._filiere = new Filiere();
    }
    return this._filiere;
  }

  set filiere(value: Filiere) {
    this._filiere = value;
  }

  get filieres(): Array<Filiere> {
    if (this._filieres == null){
      this._filieres = new Array<Filiere>();
    }
    return this._filieres;
  }

  set filieres(value: Array<Filiere>) {
    this._filieres = value;
  }

  // private clone(filiere:Filiere)
  // {
  //   let myClone = new Filiere();
  //   myClone.id=filiere.id;
  //   myClone.nomfiliere=filiere.nomfiliere;
  //   return myClone;
  // }
}

