import { Component, OnInit } from '@angular/core';
import {MatiereService} from "../../controller/service/matiere.service";
import {Prof} from "../../controller/model/prof.model";
import {Matiere} from "../../controller/model/matiere.model";

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.css']
})
export class MatiereListComponent implements OnInit {

  constructor(private matiereService:MatiereService) { }


  public update(index: number,matiere:Matiere) {
    this.matiereService.update(index,matiere);
  }

  public delete(index:number)
  {
    this.matieres.splice(index,1);
  }

  get matieres(): Array<Matiere> {
    return this.matiereService.matieres;
  }



  ngOnInit(): void {
    this.matiereService.findAll();
  }

}
