import {Niveau} from "./niveau.model";
import {Filiere} from "./filiere.model";

export class Student {
  public id: number;
  public apoge:string;
  public apogeSearch:string;
  public cne:string;
  public sexe:string;
  public name:string;
  public lastname:string;
  public phone:string;
  public mail:string;
  public city:string;
  public country:string;
  public date_Naissanse:string;
  public filiere = new Filiere();
  public niveau = new Niveau();
}
