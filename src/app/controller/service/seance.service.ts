import { Injectable } from '@angular/core';
import {Seance} from "../model/seance.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class SeanceService {

  constructor(private http:HttpClient) { }

  private _seance : Seance;
  private _seances : Array<Seance>;
  private _index:number;

  public save(){
    if(this.seance.id== null) {
      this.http.post('http://localhost:8080/api/gestion/seance/',this.seance).subscribe(
        data=>{
          if(data>0){
            this.seances.push({...this.seance});   // clone
            alert('Seance added Succesfully');
            this.findAll();
            this.seance=null;
          }else if(data==-1){
            alert('Seance already exist');
          }else if(data==-2){
            alert('salle already occupied');
          }else if(data==-3){
            alert('matiere doesn\'t exist ' );
          }
        }
      );
    }
  }

  public findAll(){
    this.http.get<Array<Seance>>('http://localhost:8080/api/gestion/seance/').subscribe(
      data=> {
        this.seances = data;
      },error => {
        console.log(error);
      }
    );
  }

  public update(index:number,Seance:Seance)
  {
    this.seance = {...this.seances[index]};
    this._index=index;
  }


  get seance(): Seance {
    if (this._seance == null){
      this._seance = new Seance();
    }
    return this._seance;
  }

  set seance(value: Seance) {
    this._seance = value;
  }

  get seances(): Array<Seance> {
    if (this._seances == null){
      this._seances = new Array<Seance>();
    }
    return this._seances;
  }

  set seances(value: Array<Seance>) {
    this._seances = value;
  }

}
