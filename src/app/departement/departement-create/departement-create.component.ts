import { Component, OnInit } from '@angular/core';
import {DepartementService} from "../../controller/service/departement.service";
import {Departement} from "../../controller/model/departement.model";
import {Niveau} from "../../controller/model/niveau.model";

@Component({
  selector: 'app-departement-create',
  templateUrl: './departement-create.component.html',
  styleUrls: ['./departement-create.component.css']
})
export class DepartementCreateComponent implements OnInit {

  constructor(private departementService:DepartementService) { }

  ngOnInit(): void {
    this.departementService.findAll();
  }

  get departement(): Departement {
    return this.departementService.departement;
  }

  public save(){
    this.departementService.save();
  }


}
