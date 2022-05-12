import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student.model";
import {Observable, publish} from "rxjs";
import {Filiere} from "../model/filiere.model";
import {Niveau} from "../model/niveau.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

private _student : Student;
private _studentApoge: Student;

private _searchFiliere :string;
private _searchNiveau :string;

private _students : Array<Student>;
private _students1 : Array<Student>;

private _index:number;

private _filiere:Filiere;
private _niveau:Niveau;



public findByApoge(){
  this.http.get<Array<Student>>('http://localhost:8080/api/gestion/student/apoge/'+this.student.apogeSearch+'/').subscribe(
    data => {
    this.students1 = data;
    },error => {
      console.log(error);
    }
  );

}


  public findAll(){
    console.log("sawsan");
    this.http.get<Array<Student>>('http://localhost:8080/api/gestion/student/').subscribe(
      data=> {
        this.students = data;
      },error => {
        console.log(error);
      }
    );
  }
public save(){

  if(this.student.id==null) {

    this.http.post('http://localhost:8080/api/gestion/student/',this.student).subscribe(
      data=>{
        if(data>0){
          // console.log('Student added ');
          this.students.push({...this.student});   // clone
          this.findAll();
          this.student=null;
          alert('student add Succesfully!');
        }else if(data==-1){
          alert('student already exist');
        }else if(data==-2){
          alert('please enter all field');
        }else if(data==-3){
          alert('filiere doesn \'t exist or null');
        }else if(data==-4){
          alert('niveau/semestre doesn\'t exist or null');
        }
      }
    );
  }else { alert('please enter all field'); }
}



  public findAllSameClass(semestre:String,filiere:String): Array<Student> {
    this.http.get<Array<Student>>('http://localhost:8080/api/gestion/student/niveau/'+ semestre +'/id_fil/'+ filiere).subscribe(
      data=> {
        this.students1 = data;
        return this.students;
      },error => {
        console.log(error);
      }
    );
    return null;
  }


  get studentApoge(): Student {
    if (this._studentApoge == null) {
      this._studentApoge = new Student();
    }
    return this._studentApoge;
  }

  set studentApoge(value: Student) {
    this._studentApoge = value;
  }

  get student(): Student {
    if (this._student == null){
      this._student = new Student();
    }
    return this._student;
  }

  set student(value: Student) {
    this._student = value;
  }


  set students1(value: Array<Student>) {
    this._students1 = value;
  }

  get students(): Array<Student> {
    if (this._students == null){
      this._students = new Array<Student>();
    }
    return this._students;
  }
  get students1(): Array<Student> {
    if (this._students1 == null){
      this._students1 = new Array<Student>();
    }
    return this._students1;
  }

  set students(value: Array<Student>) {
    this._students = value;
  }


  get searchFiliere(): string {
    return this._searchFiliere;
  }

  set searchFiliere(value: string) {
    this._searchFiliere = value;
  }

  get searchNiveau(): string {
    return this._searchNiveau;
  }

  set searchNiveau(value: string) {
    this._searchNiveau = value;
  }

  public update(index:number,student:Student)
  {
    this.student = {...this.students[index]};
    this._index=index;
  }



}

