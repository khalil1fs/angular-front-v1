import { Injectable } from '@angular/core';
import {Matiere} from "../model/matiere.model";
import {Absence} from "../model/absence.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  private _absence : Absence;
  private _absences : Array<Absence>;
  private _index:number;

  constructor(private http:HttpClient) { }

  public save(){
    if(this.absence.id== null) {
      // console.log("ass");
      this.http.post('http://localhost:8080/api/gestion/absence/',this.absence).subscribe(
        data=>{
          if(data>0){
            console.log('sawsan');
            this.absences.push({...this.absence});   // clone
            alert('absence added Succesfully!');
            this.findAll();
            this.absence=null;
          }else if(data==-1){
            alert('absence already exist');
          }else if(data==-2){
            alert('student doesn\'t exist');
          }else if(data==-3){
            alert('seance doesn\'t exist');
          }else if(data==-4){
            alert('absence already exist to this student ;)');
          }
        }
      );
    }
  }

  public findAll(){
    this.http.get<Array<Absence>>('http://localhost:8080/api/gestion/absence/').subscribe(
      data=> {
        this.absences = data;
      },error => {
        console.log(error);
      }
    );
  }

  public update(index:number,absence:Absence)
  {
    this.absence = {...this.absences[index]};
    this._index=index;
  }



  get absence(): Absence {
    if (this._absence == null){
      this._absence = new Absence();
    }
    return this._absence;
  }

  set absence(value: Absence) {
    this._absence = value;
  }

  get absences(): Array<Absence> {
    if (this._absences == null){
      this._absences = new Array<Absence>();
    }
    return this._absences;
  }
  set absences(value: Array<Absence>) {
    this._absences = value;
  }
}
