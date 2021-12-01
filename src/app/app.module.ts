import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { KategObjComponent } from './components/kateg-obj/kateg-obj.component';
import { LanacComponent } from './components/lanac/lanac.component';
import { MestoComponent } from './components/mesto/mesto.component';
import { ObjekatComponent } from './components/objekat/objekat.component';
import { KategObjDialogComponent } from './components/dialogs/kateg-obj-dialog/kateg-obj-dialog.component';
import { LanacDialogComponent } from './components/dialogs/lanac-dialog/lanac-dialog.component';
import { MestoDialogComponent } from './components/dialogs/mesto-dialog/mesto-dialog.component';
import { ObjekatDialogComponent } from './components/dialogs/objekat-dialog/objekat-dialog.component';
import { IstorNielComponent } from './components/istor-niel/istor-niel.component';
import { IstorNedComponent } from './components/istor-ned/istor-ned.component';
import { IstorMesComponent } from './components/istor-mes/istor-mes.component';
import { IstorDneComponent } from './components/istor-dne/istor-dne.component';
import { IstorCenaComponent } from './components/istor-cena/istor-cena.component';

import { DatumComponent } from './components/datum/datum.component';
import { DatumDialogComponent } from './components/dialogs/datum-dialog/datum-dialog.component';
import { MesecniComponent } from './components/mesecni/mesecni.component';
import { MesecniDialogComponent } from './components/dialogs/mesecni-dialog/mesecni-dialog.component';
import { NedeljniComponent } from './components/nedeljni/nedeljni.component';
import { NedeljniDialogComponent } from './components/dialogs/nedeljni-dialog/nedeljni-dialog.component';
import { DnevniDialogComponent } from './components/dialogs/dnevni-dialog/dnevni-dialog.component'; 
import { DnevniComponent } from './components/grupa/dnevni.component';

import { VrstaAmbalComponent } from './components/vrstaambal/vrstaambal.component';
import { VrstaAmbalDialogComponent } from './components/dialogs/vrstaambal-dialog/vrstaambal-dialog.component';
import { JedMereComponent } from './components/jedmere/jedmere.component';
import { JedMereDialogComponent } from './components/dialogs/jedmere-dialog/jedmere-dialog.component';
import { KategorijaComponent } from './components/kategorija/kategorija.component';
import { KategorijaDialogComponent } from './components/dialogs/kategorija-dialog/kategorija-dialog.component';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { ArtiklDialogComponent } from './components/dialogs/artikl-dialog/artikl-dialog.component';
import { AuthInterceptor } from './interceptor';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorComponent,
    AboutComponent,
    KategObjComponent,
    LanacComponent,
    MestoComponent,
    ObjekatComponent,
    KategObjDialogComponent,
    LanacDialogComponent,
    MestoDialogComponent,
    ObjekatDialogComponent,
    IstorNielComponent,
    IstorNedComponent,
    IstorMesComponent,
    IstorDneComponent,
    IstorCenaComponent,
    DnevniComponent,
    DnevniDialogComponent,
    DatumComponent,
    DatumDialogComponent,
    MesecniComponent,
    MesecniDialogComponent,
    NedeljniComponent,
    NedeljniDialogComponent,
    VrstaAmbalComponent,
    VrstaAmbalDialogComponent,
    JedMereComponent,
    JedMereDialogComponent,
    KategorijaComponent,
    KategorijaDialogComponent,
    ArtiklComponent,
    ArtiklDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
