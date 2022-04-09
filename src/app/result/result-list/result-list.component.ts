import { Component, OnInit } from '@angular/core';
import {ResultatService} from "../../controller/service/resultat.service";
import {Resultat} from "../../controller/model/resultat.model";
import {Departement} from "../../controller/model/departement.model";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(private resultatService:ResultatService) { }

  get note(): number {
    return this.resultatService.findMoyenneGeneral();
  }
  //
  //
  // public update(index:number,s:Resultat){
  //   this.resultatService.update(index,s);
  // }
  //
  // public delete(index:number){
  //   this.results.splice(index,1);
  // }

  ngOnInit(): void {
    this.resultatService.findMoyenneGeneral();
  }

}
