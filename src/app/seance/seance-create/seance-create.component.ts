import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../controller/service/seance.service";
import {Seance} from "../../controller/model/seance.model";
import {NiveauService} from "../../controller/service/niveau.service";
import {FiliereService} from "../../controller/service/filiere.service";
import {Niveau} from "../../controller/model/niveau.model";
import {Filiere} from "../../controller/model/filiere.model";
import {MatiereService} from "../../controller/service/matiere.service";
import {Matiere} from "../../controller/model/matiere.model";

@Component({
  selector: 'app-seance-create',
  templateUrl: './seance-create.component.html',
  styleUrls: ['./seance-create.component.css']
})
export class SeanceCreateComponent implements OnInit {

  constructor(private seanceService:SeanceService
              ,private  niveauService:NiveauService
              ,private  matiereService: MatiereService
              ,private filiereService:FiliereService) { }

  get niveaux(): Array<Niveau> {
    return this.niveauService.niveaux;
  }

  get filieres(): Array<Filiere> {
    return this.filiereService.filieres;
  }

  get matieres(): Array<Matiere> {
    return this.matiereService.matieres;
  }


  public save(){
    this.seanceService.save();
}

  get seance(): Seance {
    return this.seanceService.seance;
  }


  ngOnInit(): void {
    this.niveauService.findAll();
    this.filiereService.findAll();
    this.seanceService.findAll();
    this.matiereService.findAll();

  }

}
