import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { StageComponent } from './stage/stage.component';
import { AffectationComponent } from './affectation/affectation.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupeComponent } from './groupe/groupe.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    DashboardComponent,
    EtudiantComponent,
    StageComponent,
    AffectationComponent,
    LoginComponent,
    GroupeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
