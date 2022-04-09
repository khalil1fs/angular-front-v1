import { Injectable } from '@angular/core';
import {Departement} from "../model/departement.model";
import {Inscription} from "../model/inscription.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class InscriptionService {
  private _inscriptions : Array<Inscription>;


  get inscriptions(): Array<Inscription> {
    if (this._inscriptions == null){
      this._inscriptions = new Array<Inscription>();
    }
    return this._inscriptions;
  }

  set inscriptions(value: Array<Inscription>) {
    this._inscriptions = value;
  }

  public findAll(){
    this.http.get<Array<Inscription>>('http://localhost:8080/api/gestion/incription/').subscribe(
      data=> {
        this.inscriptions = data;
      },error => {
        console.log(error);
      }
    );
  }

  constructor(private http:HttpClient) { }
}
