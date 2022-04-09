import { Component, OnInit } from '@angular/core';
import {ProfService} from "../../controller/service/prof.service";
import {Niveau} from "../../controller/model/niveau.model";
import {Prof} from "../../controller/model/prof.model";
import {DepartementService} from "../../controller/service/departement.service";
import {Departement} from "../../controller/model/departement.model";

@Component({
  selector: 'app-prof-create',
  templateUrl: './prof-create.component.html',
  styleUrls: ['./prof-create.component.css']
})
export class ProfCreateComponent implements OnInit {

  constructor(private profService:ProfService,private departementService:DepartementService) { }

  get prof(): Prof {
    return this.profService.prof;
  }

  get departements(): Array<Departement> {
    return this.departementService.departements;
  }


  ngOnInit(): void {
    this.departementService.findAll();
    this.profService.findAll();
  }
  public save(){
    this.profService.save();
  }


}
