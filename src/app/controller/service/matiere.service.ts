import { Injectable } from '@angular/core';
import {Matiere} from "../model/matiere.model";
import {HttpClient} from "@angular/common/http";
import {Prof} from "../model/prof.model";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  private _matiere : Matiere;
  private _matieres : Array<Matiere>;
  private _index:number;

  public save(){
    if(this.matiere.name_Matiere== null) {
      this.http.post('http://localhost:8080/api/gestion/matiere/',this.matiere).subscribe(
        data=>{
          if(data>0){
            console.log('sawsan');
            this.matieres.push({...this.matiere});   // clone
            alert('matiere added Succesfully!');
            this.findAll();
            this.matiere=null;
          }else if(data<=-4){
            alert('enter all required field');
          }else if(data==-5){
            alert('Matiere already exist ( same matiere are not accepted here) ');
          }else if(data==-6){
            alert('filiere  doesn\'t exist');
          }else if(data==-7){
            alert('Semestre/niveau doesn\'t exist');
          }else if(data==-8){
            alert('Prof doesn\'t exist');
          }
        }
      );
    }
  }

  public findAll(){
    this.http.get<Array<Matiere>>('http://localhost:8080/api/gestion/matiere/').subscribe(
      data=> {
        this.matieres = data;
      },error => {
        console.log(error);
      }
    );
  }

  public update(index:number,matiere:Matiere)
  {
    this.matiere = {...this.matieres[index]};
    this._index=index;
  }

  constructor(private http:HttpClient) { }


  get matiere(): Matiere {
    if (this._matiere == null){
      this._matiere = new Matiere();
    }
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }

  get matieres(): Array<Matiere> {
    if (this._matieres == null){
      this._matieres = new Array<Matiere>();
    }
    return this._matieres;
  }

  set matieres(value: Array<Matiere>) {
    this._matieres = value;
  }
}
