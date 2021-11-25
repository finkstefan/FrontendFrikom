import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';
import { DepartmanComponent } from './components/departman/departman.component';
import { FakultetComponent } from './components/fakultet/fakultet.component';
import { KategObjComponent } from './components/kateg-obj/kateg-obj.component';
import { LanacComponent } from './components/lanac/lanac.component';
import { MestoComponent } from './components/mesto/mesto.component';
import { ObjekatComponent } from './components/objekat/objekat.component';
import { StatusComponent } from './components/status/status.component';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [
  { path: 'objekat', component: ObjekatComponent },
  { path: 'lanac', component: LanacComponent },
  { path: 'mesto', component: MestoComponent },
  { path: 'kategObj', component: KategObjComponent },
  {path:'fakultet', component: FakultetComponent},
  {path:'student', component: StudentComponent},
  {path:'departman', component: DepartmanComponent},
  {path:'status', component: StatusComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'author', component: AuthorComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
