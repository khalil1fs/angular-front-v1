import { Component, OnInit } from '@angular/core';
import {Niveau} from "../../controller/model/niveau.model";
import {Departement} from "../../controller/model/departement.model";
import {DepartementService} from "../../controller/service/departement.service";

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

  constructor(private departementService:DepartementService) { }

  get departements(): Array<Departement> {
    // console.log('coco');
    return this.departementService.departements;
  }

  public update(index:number,s:Departement){
    this.departementService.update(index,s);
  }

  public delete(index:number){
    var i = confirm("are you sure to delete this items ?");
    if(i==true) {
      this.departements.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.departementService.findAll();
  }

}
