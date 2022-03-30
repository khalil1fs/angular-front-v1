import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { StudentsComponent } from './students/students.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsCreateComponent } from './students/students-create/students-create.component';
import { FilieresComponent } from './filieres/filieres.component';
import { FilieresCreateComponent } from './filieres/filieres-create/filieres-create.component';
import { FilieresListComponent } from './filieres/filieres-list/filieres-list.component';
import {FormsModule} from "@angular/forms";
import { NiveauComponent } from './niveau/niveau.component';
import { NiveauCreateComponent } from './niveau/niveau-create/niveau-create.component';
import { NiveauListComponent } from './niveau/niveau-list/niveau-list.component';
import { DepartementCreateComponent } from './departement/departement-create/departement-create.component';
import { DepartementListComponent } from './departement/departement-list/departement-list.component';
import { DepartementComponent } from './departement/departement.component';
import { ProfComponent } from './prof/prof.component';
import { ProfCreateComponent } from './prof/prof-create/prof-create.component';
import { ProfListComponent } from './prof/prof-list/prof-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionListComponent } from './inscription/inscription-list/inscription-list.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MatiereListComponent } from './matiere/matiere-list/matiere-list.component';
import { MatiereCreateComponent } from './matiere/matiere-create/matiere-create.component';
import { SeanceComponent } from './seance/seance.component';
import { SeanceListComponent } from './seance/seance-list/seance-list.component';
import { SeanceCreateComponent } from './seance/seance-create/seance-create.component';
import { AbsenceComponent } from './absence/absence.component';
import { AbsenceCreateComponent } from './absence/absence-create/absence-create.component';
import { AbsenceListComponent } from './absence/absence-list/absence-list.component';
import { NoteComponent } from './note/note.component';
import { NoteCreateComponent } from './note/note-create/note-create.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { ResultComponent } from './result/result.component';
import { ResultCreateComponent } from './result/result-create/result-create.component';
import { ResultListComponent } from './result/result-list/result-list.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
// import { NavTestComponent } from './nav-test/nav-test.component';                  //

// const routes: Routes = [
//   { path: 'home', component: StudentsCreateComponent }
//   // { path: '', redirectTo: '/home', pathMatch: 'full'}
// ];


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsListComponent,
    StudentsCreateComponent,
    FilieresComponent,
    FilieresCreateComponent,
    FilieresListComponent,
    NiveauComponent,
    NiveauCreateComponent,
    NiveauListComponent,
    DepartementCreateComponent,
    DepartementListComponent,
    DepartementComponent,
    ProfComponent,
    ProfCreateComponent,
    ProfListComponent,
    InscriptionComponent,
    InscriptionListComponent,
    MatiereComponent,
    MatiereListComponent,
    MatiereCreateComponent,
    SeanceComponent,
    SeanceListComponent,
    SeanceCreateComponent,
    AbsenceComponent,
    AbsenceCreateComponent,
    AbsenceListComponent,
    NoteComponent,
    NoteCreateComponent,
    NoteListComponent,
    ResultComponent,
    ResultCreateComponent,
    ResultListComponent,
    NavbarComponent,
    // NavTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
