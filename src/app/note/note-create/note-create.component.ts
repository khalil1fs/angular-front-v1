import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../controller/service/note.service";
import {Note} from "../../controller/model/note.model";
import {StudentService} from "../../controller/service/student.service";
import {Student} from "../../controller/model/student.model";

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  constructor(private noteService:NoteService,private  studentService:StudentService) { }
  public save(){
    this.noteService.save();
  }

  get students():Array<Student>
  {
    return this.studentService.students;
  }

  ngOnInit(): void {
    this.noteService.findAll();
    this.studentService.findAll();
  }

  get note(): Note {
    return this.noteService.note;
  }




}
