import { Component, OnInit } from '@angular/core';
import {Student} from "../../controller/model/student.model";
import {StudentService} from "../../controller/service/student.service";
import {NiveauService} from "../../controller/service/niveau.service";
import {FiliereService} from "../../controller/service/filiere.service";
import {Niveau} from "../../controller/model/niveau.model";
import {Filiere} from "../../controller/model/filiere.model";

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.css']
})
export class StudentsCreateComponent implements OnInit {

  constructor(private studentService : StudentService,private  niveauService:NiveauService,private filiereService:FiliereService) { }

  public save(){
    this.studentService.save();
  }

  get niveaux(): Array<Niveau> {
    return this.niveauService.niveaux;
  }

  get filieres(): Array<Filiere> {
    return this.filiereService.filieres;
  }

  get student(): Student {
    return this.studentService.student;
  }

  ngOnInit(): void {
    this.niveauService.findAll();
    this.filiereService.findAll();
  }
}
