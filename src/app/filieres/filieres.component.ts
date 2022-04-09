import { Component, OnInit } from '@angular/core';
import {Student} from "../controller/model/student.model";
import {FiliereService} from "../controller/service/filiere.service";
import {Filiere} from "../controller/model/filiere.model";

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
