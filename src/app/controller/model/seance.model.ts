import {Matiere} from "./matiere.model";

export class Seance {
  public id:number;
  public date_Seance:String;
  public reference:String;
  public salle:String;
  public heure:number;
  public matiere=new Matiere();

}
