import {Departement} from "./departement.model";

export class Prof {
  public id:number;
  public name:String;
  public email:String;
  public last_Name:String;
  public cin:String;
  public matricule:String;
  public diplom:String;
  public date_Start_Work:String;

  public departement = new Departement();

}
