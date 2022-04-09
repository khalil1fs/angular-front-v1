import { Component, OnInit } from '@angular/core';
import {InscriptionService} from "../../controller/service/inscription.service";
import {Filiere} from "../../controller/model/filiere.model";
import {Inscription} from "../../controller/model/inscription.model";

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.css']
})
export class InscriptionListComponent implements OnInit {

  constructor(private  inscriptionService:InscriptionService) { }

  get inscriptions(): Array<Inscription> {
    return this.inscriptionService.inscriptions;
  }

  ngOnInit(): void {
    this.inscriptionService.findAll();
  }

}
