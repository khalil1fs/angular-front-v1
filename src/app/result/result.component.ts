import { Component, OnInit } from '@angular/core';
import {NiveauService} from "../controller/service/niveau.service";
import {FiliereService} from "../controller/service/filiere.service";
import {Niveau} from "../controller/model/niveau.model";
import {Filiere} from "../controller/model/filiere.model";
import {ResultatService} from "../controller/service/resultat.service";
import {Resultat} from "../controller/model/resultat.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private  niveauService:NiveauService,private filiereService:FiliereService) { }

  get niveaux(): Array<Niveau> {
    return this.niveauService.niveaux;
  }

  get filieres(): Array<Filiere> {
    return this.filiereService.filieres;
  }


  ngOnInit(): void {
    this.niveauService.findAll();
    this.filiereService.findAll();
  }

}
