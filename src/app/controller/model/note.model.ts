import {Student} from "./student.model";
import {Matiere} from "./matiere.model";

export class Note {
  public id:number;
  public reference:string;
  public resultat:number;
  public remarque:string;
  public date_Note:string;
  public student=new Student();
  public matiere= new Matiere();
}
