import { Component, OnInit } from '@angular/core';
import {StudentsCreateComponent} from "../students-create/students-create.component";
import {Niveau} from "../../controller/model/niveau.model";
import {Filiere} from "../../controller/model/filiere.model";
import {StudentService} from "../../controller/service/student.service";
import {FiliereService} from "../../controller/service/filiere.service";
import {NiveauService} from "../../controller/service/niveau.service";
import {Student} from "../../controller/model/student.model";

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(private studentService: StudentService,private  niveauService:NiveauService,private filiereService:FiliereService) { }

  private _semestre:string;

  private _nomFiliere:string;


  get nomFiliere(): string {
    return this._nomFiliere;
  }

  set nomFiliere(value: string) {
    this._nomFiliere = value;
  }

  get niveaux(): Array<Niveau> {
    return this.niveauService.niveaux;
  }

  get filieres(): Array<Filiere> {
    return this.filiereService.filieres;
  }


  get semestre(): string {
    return this._semestre;
  }

  set semestre(value: string) {
    this._semestre = value;
  }

  public update(index: number, student: Student) {
    this.studentService.update(index, student);
  }

  // public delete(index: number) {
  //   var i = confirm("are you sure to delete this items ?");
  //   if(i==true) {
  //     this.students1.splice(index, 1);
  //   }
  // }


  get student1(){
    return this.studentService.students1;
  }

  get student(){
    return this.studentService.students;
  }

   students(filiere: string,niveau: string): Array<Student>
  {
    return this.studentService.findAllSameClass(filiere,niveau);
  }


  ngOnInit(): void {

    this.niveauService.findAll();
    this.filiereService.findAll();
  }
}
