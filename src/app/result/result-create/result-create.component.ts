import { Component, OnInit } from '@angular/core';
import {ResultatService} from "../../controller/service/resultat.service";
import {Resultat} from "../../controller/model/resultat.model";

@Component({
  selector: 'app-result-create',
  templateUrl: './result-create.component.html',
  styleUrls: ['./result-create.component.css']
})
export class ResultCreateComponent implements OnInit {

  constructor(private resultatService:ResultatService) { }

  // public save(){
  //   this.resultatService.save();
  // }

  get result(): Resultat {
    return this.resultatService.result;
  }

  ngOnInit(): void {
    // this.resultatService.findAll();
  }

}
