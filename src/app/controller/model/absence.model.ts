import {Student} from "./student.model";
import {Seance} from "./seance.model";

export class Absence {
  public id:number;
  public reference:String;
  public justife:boolean;

  public student = new Student();
  public seance= new Seance();
}
