import { Component, OnInit } from '@angular/core';
import {Absence} from "../../controller/model/absence.model";
import {AbsenceService} from "../../controller/service/absence.service";
import {Departement} from "../../controller/model/departement.model";

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent implements OnInit {

  constructor(private absenceService:AbsenceService) { }

  get absences(): Array<Absence> {
    return this.absenceService.absences;
  }

  public update(index:number,s:Absence){
    this.absenceService.update(index,s);
  }

  public delete(index:number){
    this.absences.splice(index,1);
  }

  ngOnInit(): void {
    this.absenceService.findAll();
  }

}
