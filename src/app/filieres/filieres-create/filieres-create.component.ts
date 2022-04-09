import { Component, OnInit } from '@angular/core';
import {FiliereService} from "../../controller/service/filiere.service";
import {Filiere} from "../../controller/model/filiere.model";

@Component({
  selector: 'app-filieres-create',
  templateUrl: './filieres-create.component.html',
  styleUrls: ['./filieres-create.component.css']
})
export class FilieresCreateComponent implements OnInit {

  constructor(private filierService:FiliereService) { }

  public save(){
    this.filierService.save();
  }

  get filiere(): Filiere {
    return this.filierService.filiere;
  }

  ngOnInit(): void {
  }

}
