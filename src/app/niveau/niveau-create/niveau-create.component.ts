import { Component, OnInit } from '@angular/core';
import {NiveauService} from "../../controller/service/niveau.service";
import {Student} from "../../controller/model/student.model";
import {Niveau} from "../../controller/model/niveau.model";

@Component({
  selector: 'app-niveau-create',
  templateUrl: './niveau-create.component.html',
  styleUrls: ['./niveau-create.component.css']
})
export class NiveauCreateComponent implements OnInit {

  constructor(private niveauService:NiveauService) { }

  get niveau(): Niveau {
    return this.niveauService.niveau;
  }

  public save()
  {
    this.niveauService.save();
  }

  ngOnInit(): void {
  }

}
