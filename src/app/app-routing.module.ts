import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import {StudentsCreateComponent} from "./students/students-create/students-create.component";
import {StudentsListComponent} from "./students/students-list/students-list.component";
import {ProfCreateComponent} from "./prof/prof-create/prof-create.component";
import {ProfListComponent} from "./prof/prof-list/prof-list.component";
import {DepartementCreateComponent} from "./departement/departement-create/departement-create.component";
import {DepartementListComponent} from "./departement/departement-list/departement-list.component";
import {NiveauCreateComponent} from "./niveau/niveau-create/niveau-create.component";
import {NiveauListComponent} from "./niveau/niveau-list/niveau-list.component";
import {FilieresCreateComponent} from "./filieres/filieres-create/filieres-create.component";
import {SeanceCreateComponent} from "./seance/seance-create/seance-create.component";
import {SeanceListComponent} from "./seance/seance-list/seance-list.component";
import {MatiereCreateComponent} from "./matiere/matiere-create/matiere-create.component";
import {MatiereListComponent} from "./matiere/matiere-list/matiere-list.component";
import {NoteCreateComponent} from "./note/note-create/note-create.component";
import {ResultCreateComponent} from "./result/result-create/result-create.component";
import {ResultListComponent} from "./result/result-list/result-list.component";
import {InscriptionListComponent} from "./inscription/inscription-list/inscription-list.component";
import {AbsenceCreateComponent} from "./absence/absence-create/absence-create.component";
import {AbsenceListComponent} from "./absence/absence-list/absence-list.component";
import {HomeComponent} from "./home/home.component";
import {DocumentFicheComponent} from "./document/document-fiche/document-fiche.component";
import {SetingAllComponent} from "./setting/seting-all/seting-all.component";
import {StudentNavComponent} from "./students/student-nav/student-nav.component";
import {ProfNavComponent} from "./prof/prof-nav/prof-nav.component";
import {ResultComponent} from "./result/result.component";
import {DocumentNavComponent} from "./document/document-nav/document-nav.component";
import {SearchStudentComponent} from "./students/search-student/search-student.component";
import {StudentsFindComponent} from "./students/students-find/students-find.component";
import {SeanceNavComponent} from "./seance/seance-nav/seance-nav.component";
import {ProfSearchComponent} from "./prof/prof-search/prof-search.component";

const routes: Routes = [
  {path:'add-student',component:StudentsCreateComponent},  // Student
  {path:'all-student',component:StudentsListComponent},

  {path:'student',component:StudentNavComponent},   // student nav

  {path:'prof',component:ProfNavComponent},   // student nav



  {path:'add-prof',component:ProfCreateComponent},        // prof
  {path:'all-prof',component:ProfListComponent},

  {path:'add-department',component:DepartementCreateComponent},  // Department
  {path:'department',component:DepartementListComponent},

  {path:'add-niveau',component:NiveauCreateComponent},          // Niveau
  {path:'niveau',component:NiveauListComponent},

  {path:'add-filiere',component:FilieresCreateComponent},       // Filiere
  {path:'filiere',component:ProfListComponent},

  {path:'add-seance',component:SeanceCreateComponent},          // Seance
  {path:'seance',component:SeanceListComponent},

  {path:'add-matiere',component:MatiereCreateComponent},          // matiere
  {path:'matiere',component:MatiereListComponent},

  {path:'add-note',component:NoteCreateComponent},          // note
  // {path:'note',component:NListComponent},

  {path:'add-result',component:ResultCreateComponent},          // result
  {path:'result',component:ResultComponent},

  {path:'add-absence',component:AbsenceCreateComponent},          // absence
  {path:'absence',component:AbsenceListComponent},

  {path:'inscription',component:InscriptionListComponent},      // inscription

  {path:'attestation',component:DocumentFicheComponent},      // Document Fiche

  // {path:'document',component:Document},      // Document Fiche

  {path:'',component:HomeComponent},     // Home

  {path:'document',component:DocumentNavComponent},     // Home

  {path:'search',component:SearchStudentComponent},     // search student

  {path:'seance-nav',component:SeanceNavComponent},     // search student
  {path:'prof-search',component:ProfSearchComponent},     // search student

  {path:'setting',component:SetingAllComponent}  ,        // Setting
  {path:'search-student',component:StudentsFindComponent}          // Setting


];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
