import { Injectable } from '@angular/core';
import {Niveau} from "../model/niveau.model";
import {Student} from "../model/student.model";
import {Filiere} from "../model/filiere.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NiveauService {
  private _niveau : Niveau;
  private _niveaux : Array<Niveau>;
  private _index:number;

  public save(){
    if(this.niveau.id==null) {
      this.http.post('http://localhost:8080/api/gestion/niveau/',this.niveau).subscribe(
        data=>{
          if(data>0){
            this.niveaux.push({...this.niveau});   // clone
            alert('niveau added Succesfully');
            this.findAll();
            this.niveau=null;
          }else if(data==-1){
            alert('niveau already exist');
          }else if(data==-2){
            alert('niveau already exist');
          }
        }
      );
    }

  }

  public update(index:number,niveau:Niveau)
  {
    this.niveau = {...this.niveaux[index]};
    this._index=index;
  }

  public findAll(){
    this.http.get<Array<Niveau>>('http://localhost:8080/api/gestion/niveau/').subscribe(
      data=> {
        this.niveaux = data;
      },error => {
        console.log(error);
      }
    );
  }

  constructor(private http:HttpClient) { }

  get niveau(): Niveau {
    if (this._niveau == null){
      this._niveau = new Niveau();
    }
    return this._niveau;
  }

  set niveau(value: Niveau) {
    this._niveau = value;
  }

  get niveaux(): Array<Niveau> {
    if (this._niveaux == null){
      this._niveaux = new Array<Niveau>();
    }
    return this._niveaux;
  }

  set niveaux(value: Array<Niveau>) {
    this._niveaux = value;
  }

}
