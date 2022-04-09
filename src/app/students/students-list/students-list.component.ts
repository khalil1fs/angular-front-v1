import {Component, OnInit} from '@angular/core';
import {Student} from "../../controller/model/student.model";
import {StudentService} from "../../controller/service/student.service";
import {InscriptionService} from "../../controller/service/inscription.service";
import {InscriptionListComponent} from "../../inscription/inscription-list/inscription-list.component";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  public delete(index: number) {
    var i = confirm("are you sure to delete this items ?");
    if(i==true) {
      this.students.splice(index, 1);
    }
  }

  get students(): Array<Student> {
    return this.studentService.students;
  }

  constructor(private studentService: StudentService) {
  }


  ngOnInit(): void {
    this.studentService.findAll();
  }

  public update(index: number, student: Student) {
    this.studentService.update(index, student);
  }
}
