import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../controller/service/student.service";
import {Student} from "../../controller/model/student.model";

@Component({
  selector: 'app-students-find',
  templateUrl: './students-find.component.html',
  styleUrls: ['./students-find.component.css']
})
export class StudentsFindComponent implements OnInit {

  constructor(private studentService: StudentService) { }

 public findByApoge() {
  this.studentService.findByApoge();
 }

  get student(): Student {
    return this.studentService.student;
  }

  get student1(): Array<Student> {
    return this.studentService.students1;
  }

  ngOnInit(): void {
    this.studentService.findByApoge();
  }

}
