import { Component, OnInit } from '@angular/core';
import {Student} from "../../controller/model/student.model";
import {FiliereService} from "../../controller/service/filiere.service";
import {Filiere} from "../../controller/model/filiere.model";

@Component({
  selector: 'app-filieres-list',
  templateUrl: './filieres-list.component.html',
  styleUrls: ['./filieres-list.component.css']
})
export class FilieresListComponent implements OnInit {

  constructor(private filierService:FiliereService) { }

  public delete(index:number)
  {
    this.filieres.splice(index,1);
  }

  get filieres(): Array<Filiere> {
    return this.filierService.filieres;
  }

  public update(index: number,filiere:Filiere) {
    this.filierService.update(index,filiere);
  }

  ngOnInit(): void {
    this.filierService.findAll();
  }

}
