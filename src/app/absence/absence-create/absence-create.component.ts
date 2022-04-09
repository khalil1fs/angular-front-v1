import { Component, OnInit } from '@angular/core';
import {AbsenceService} from "../../controller/service/absence.service";
import {Departement} from "../../controller/model/departement.model";
import {Absence} from "../../controller/model/absence.model";

@Component({
  selector: 'app-absence-create',
  templateUrl: './absence-create.component.html',
  styleUrls: ['./absence-create.component.css']
})
export class AbsenceCreateComponent implements OnInit {

  constructor(private absenceService:AbsenceService) { }

  get absence(): Absence {
    return this.absenceService.absence;
  }

  public save(){
    this.absenceService.save();
  }

  ngOnInit(): void {
    this.absenceService.findAll();
  }

}
