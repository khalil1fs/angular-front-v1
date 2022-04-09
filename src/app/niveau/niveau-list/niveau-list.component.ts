import { Component, OnInit } from '@angular/core';
import {NiveauService} from "../../controller/service/niveau.service";
import {Filiere} from "../../controller/model/filiere.model";
import {Niveau} from "../../controller/model/niveau.model";

@Component({
  selector: 'app-niveau-list',
  templateUrl: './niveau-list.component.html',
  styleUrls: ['./niveau-list.component.css']
})
export class NiveauListComponent implements OnInit {

  constructor(private niveauService:NiveauService) { }
  get niveaux(): Array<Niveau> {
    // console.log('coco');
    return this.niveauService.niveaux;
  }

  public update(index:number,s:Niveau){
    this.niveauService.update(index,s);
  }

  public delete(index:number){
    this.niveaux.splice(index,1);
  }

  ngOnInit(): void {
    this.niveauService.findAll();
  }



}
