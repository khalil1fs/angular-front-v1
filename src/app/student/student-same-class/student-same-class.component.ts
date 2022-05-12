import { Component, OnInit } from '@angular/core';
import {NiveauService} from "../../controller/service/niveau.service";
import {FiliereService} from "../../controller/service/filiere.service";
import {Niveau} from "../../controller/model/niveau.model";
import {Filiere} from "../../controller/model/filiere.model";

@Component({
  selector: 'app-student-same-class',
  templateUrl: './student-same-class.component.html',
  styleUrls: ['./student-same-class.component.css']
})
export class StudentSameClassComponent implements OnInit {

  constructor(private  niveauService:NiveauService,private filiereService:FiliereService) { }



  ngOnInit(): void {

  }

}
