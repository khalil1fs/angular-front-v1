import { Component, OnInit } from '@angular/core';
import {MatiereService} from "../../controller/service/matiere.service";
import {Prof} from "../../controller/model/prof.model";
import {Matiere} from "../../controller/model/matiere.model";
import {NiveauService} from "../../controller/service/niveau.service";
import {FiliereService} from "../../controller/service/filiere.service";
import {Filiere} from "../../controller/model/filiere.model";
import {Student} from "../../controller/model/student.model";
import {Niveau} from "../../controller/model/niveau.model";
import {ProfService} from "../../controller/service/prof.service";

@Component({
  selector: 'app-matiere-create',
  templateUrl: './matiere-create.component.html',
  styleUrls: ['./matiere-create.component.css']
})
export class MatiereCreateComponent implements OnInit {

  constructor(private matiereService:MatiereService
              ,private  niveauService:NiveauService,private filiereService:FiliereService
              ,private profService: ProfService
              ) { }

  get filieres(): Array<Filiere> {
    return this.filiereService.filieres;
  }

  get profs(): Array<Prof> {
    return this.profService.profs;
  }

  get niveaux(): Array<Niveau> {
    return this.niveauService.niveaux;
  }


  get matiere(): Matiere {
    return this.matiereService.matiere;
  }

  public save(){
    this.matiereService.save();
  }


  ngOnInit(): void {
    this.niveauService.findAll();
    this.filiereService.findAll();
    this.matiereService.findAll();
    this.profService.findAll();
  }

}
