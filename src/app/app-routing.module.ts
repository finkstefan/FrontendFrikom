import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';
import { DatumComponent } from './components/datum/datum.component';
import { DnevniComponent } from './components/dnevni/dnevni.component';
import { IstorCenaComponent } from './components/istor-cena/istor-cena.component';
import { IstorDneComponent } from './components/istor-dne/istor-dne.component';
import { IstorMesComponent } from './components/istor-mes/istor-mes.component';
import { IstorNedComponent } from './components/istor-ned/istor-ned.component';
import { IstorNielComponent } from './components/istor-niel/istor-niel.component';
import { JedMereComponent } from './components/jedmere/jedmere.component';
import { KategObjComponent } from './components/kateg-obj/kateg-obj.component';
import { KategorijaComponent } from './components/kategorija/kategorija.component';
import { LanacComponent } from './components/lanac/lanac.component';
import { LoginComponent } from './components/login/login.component';
import { MesecniComponent } from './components/mesecni/mesecni.component';
import { MestoComponent } from './components/mesto/mesto.component';
import { NedeljniComponent } from './components/nedeljni/nedeljni.component';
import { NielsenComponent } from './components/nielsen/nielsen.component';
import { ObjekatComponent } from './components/objekat/objekat.component';
import { VrstaAmbalComponent } from './components/vrstaambal/vrstaambal.component';



const routes: Routes = [
  { path: 'nielsen', component: NielsenComponent },
  {path: 'datum', component: DatumComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mesecni', component: MesecniComponent},
 {path: 'nedeljni', component: NedeljniComponent},
 {path: 'dnevni', component: DnevniComponent},
  {path:'vrstaambal', component: VrstaAmbalComponent},
  {path:'jedmere', component: JedMereComponent},
  {path:'kategorija', component: KategorijaComponent},
  {path:'artikl', component: ArtiklComponent},
  { path: 'istorCena', component: IstorCenaComponent },
  { path: 'istorDne', component: IstorDneComponent },
  { path: 'istorMes', component: IstorMesComponent },
  { path: 'istorNed', component: IstorNedComponent },
  { path: 'istorNiel', component: IstorNielComponent },
  { path: 'objekat', component: ObjekatComponent },
  { path: 'lanac', component: LanacComponent },
  { path: 'mesto', component: MestoComponent },
  { path: 'kategObj', component: KategObjComponent },
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'author', component: AuthorComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
