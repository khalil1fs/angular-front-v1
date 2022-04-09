import { Component, OnInit } from '@angular/core';
import {ProfService} from "../../controller/service/prof.service";
import {Student} from "../../controller/model/student.model";
import {Prof} from "../../controller/model/prof.model";

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css']
})
export class ProfListComponent implements OnInit {

  constructor(private profService:ProfService) { }

  public update(index: number,prof:Prof) {
    this.profService.update(index,prof);
  }

  public delete(index:number)
  {
    this.profs.splice(index,1);
  }

  get profs(): Array<Prof> {
    return this.profService.profs;
  }

  ngOnInit(): void {
    this.profService.findAll();
  }

}
