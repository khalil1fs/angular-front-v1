import { Component, OnInit } from '@angular/core';
import {Departement} from "../../controller/model/departement.model";
import {Seance} from "../../controller/model/seance.model";
import {SeanceService} from "../../controller/service/seance.service";

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {

  constructor(private seanceService:SeanceService) { }

  get seances(): Array<Seance> {
    // console.log('coco');
    return this.seanceService.seances;
  }

  public update(index:number,s:Seance){
    this.seanceService.update(index,s);
  }

  public delete(index:number){
    this.seances.splice(index,1);
  }

  ngOnInit(): void {
    this.seanceService.findAll();
  }

}
