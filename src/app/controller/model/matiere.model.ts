import {Filiere} from "./filiere.model";
import {Niveau} from "./niveau.model";
import {Prof} from "./prof.model";

export class Matiere {
  public id:number;
  public name_Matiere:String;
  public filiere = new Filiere();
  public niveau = new Niveau();
  public prof = new Prof();


}
