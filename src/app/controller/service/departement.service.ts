import { Injectable } from '@angular/core';
import {Niveau} from "../model/niveau.model";
import {Departement} from "../model/departement.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private _departement:Departement;
  private _departements : Array<Departement>;
  private _index:number;

  constructor(private http:HttpClient) { }

  public save(){
    if(this.departement.id==null) {
      this.http.post('http://localhost:8080/api/gestion/departement/',this.departement).subscribe(
        data=>{
          if(data>0){
            this.departements.push({...this.departement});   // clone
            this.findAll();
            this.departement=null;
            alert('departement added Succesfully');
          }else if(data==-1){
            alert('departement already exist');
          }
        }
      );
    }else {
      alert('please fill all input rah 3yeet');
    }

  }

  public update(index:number,departement:Departement)
  {
    this.departement = {...this.departements[index]};
    this._index=index;
  }

  public findAll(){
    this.http.get<Array<Departement>>('http://localhost:8080/api/gestion/departement/').subscribe(
      data=> {
        this.departements = data;
      },error => {
        console.log(error);
      }
    );
  }


  get departement(): Departement {
    if (this._departement == null){
      this._departement = new Departement();
    }
    return this._departement;
  }

  set departement(value: Departement) {
    this._departement = value;
  }

  get departements(): Array<Departement> {
    if (this._departements == null){
      this._departements = new Array<Departement>();
    }
    return this._departements;
  }

  set departements(value: Array<Departement>) {
    this._departements = value;
  }
}
