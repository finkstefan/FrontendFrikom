import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';

import { DepartmanComponent } from './components/departman/departman.component';
import { FakultetComponent } from './components/fakultet/fakultet.component';
import { StatusComponent } from './components/status/status.component';
import { StudentComponent } from './components/student/student.component';
import { VrstaAmbalComponent } from './components/vrstaambal/vrstaambal.component';
import { JedMereComponent } from './components/jedmere/jedmere.component';
import { KategorijaComponent } from './components/kategorija/kategorija.component';
import { ArtiklComponent } from './components/artikl/artikl.component';


import { DnevniComponent } from './components/grupa/dnevni.component';
import { MesecniComponent } from './components/mesecni/mesecni.component';
import { NedeljniComponent } from './components/nedeljni/nedeljni.component';


//ovde dodajemo rute
const routes: Routes = [

  {path:'fakultet', component: FakultetComponent},
  {path:'student', component: StudentComponent},
  {path:'departman', component: DepartmanComponent},
  {path:'status', component: StatusComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'author', component: AuthorComponent},
  {path:'vrstaambal', component: VrstaAmbalComponent},
  {path:'jedmere', component: JedMereComponent},
  {path:'kategorija', component: KategorijaComponent},
  {path:'artikl', component: ArtiklComponent},
 {path: 'dnevni', component: DnevniComponent},
 {path: 'mesecni', component: MesecniComponent},
 {path: 'nedeljni', component: NedeljniComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

