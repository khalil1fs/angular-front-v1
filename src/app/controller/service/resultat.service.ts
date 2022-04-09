import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "../model/note.model";
import {Resultat} from "../model/resultat.model";
import {Absence} from "../model/absence.model";

@Injectable({
  providedIn: 'root'
})
export class ResultatService {

  private _result : Resultat;
  private _results : Array<Resultat>;
  private _index:number;
  private _apoge:string;
  private _note : number;

  get note(): number {
    return this._note;
  }

  set note(value: number) {
    this._note = value;
  }

  get apoge(): string {
    return this._apoge;
  }

  set apoge(value: string) {
    this._apoge = value;
  }

  constructor(private http:HttpClient) { }


  // public save(){
  //   if(this.result.id== null) {
  //     this.http.post('http://localhost:8080/api/gestion/result/',this.result).subscribe(
  //       data=>{
  //         if(data>0){
  //           this.results.push({...this.result});   // clone
  //           // alert('r added Succesfully');
  //           this.findAll();
  //           this.result=null;
  //         }else if(data==-1){
  //           alert('result already exist');
  //         }
  //       }
  //     );
  //   }
  // }

  // public findAll(){
  //   this.http.get<Array<Resultat>>('http://localhost:8080/api/gestion/result/').subscribe(
  //     data=> {
  //       this.results = data;
  //     },error => {
  //       console.log(error);
  //     }
  //   );
  // }

  public findMoyenneGeneral(): number {
    this.http.get<number>('http://localhost:8080/api/gestion/result/moyenne/'+this.apoge).subscribe(
      data=> {
        this.note = data;
        return this.note;
      },error => {
        console.log(error);
        return;
      }
    );
    return 0;
  }

  public update(index:number,resultat:Resultat)
  {
    this.result = {...this.results[index]};
    this._index=index;
  }





  get result(): Resultat {
    if (this._result == null){
      this._result = new Resultat();
    }
    return this._result;
  }

  set result(value: Resultat) {
    this._result = value;
  }

  get results(): Array<Resultat> {
    if (this._results == null){
      this._results = new Array<Resultat>();
    }
    return this._results;
  }

  set results(value: Array<Resultat>) {
    this._results = value;
  }
}
