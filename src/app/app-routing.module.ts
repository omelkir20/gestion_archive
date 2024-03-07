import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { StageComponent } from './stage/stage.component';
import { AffectationComponent } from './affectation/affectation.component';
import { LoginComponent } from './login/login.component';
import { GroupeComponent } from './groupe/groupe.component';

const routes: Routes = [
  {path :'', redirectTo:'dashboard', pathMatch:'full'},
  {path :'dashboard',component:DashboardComponent},
  {path :'departement',component:DepartementComponent},
  {path :'etudiant',component:EtudiantComponent},
  {path :'stage',component:StageComponent},
  {path :'affectation',component:AffectationComponent},
  {path :'login',component:LoginComponent},
  {path :'groupe',component:GroupeComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
