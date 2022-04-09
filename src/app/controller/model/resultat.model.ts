import {Student} from "./student.model";
import {Matiere} from "./matiere.model";

export class Resultat {
  public id:number;
  public resultat:number;

  public student=new Student();
  public matiere= new Matiere();
}
