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
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FakultetComponent } from './components/fakultet/fakultet.component';
import { DepartmanComponent } from './components/departman/departman.component';
import { FakultetDialogComponent } from './components/dialogs/fakultet-dialog/fakultet-dialog.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StatusComponent } from './components/status/status.component';
import { StatusDialogComponent } from './components/dialogs/status-dialog/status-dialog.component';
import { DepartmanDialogComponent } from './components/dialogs/departman-dialog/departman-dialog.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { StudentComponent } from './components/student/student.component';
import { StudentDialogComponent } from './components/dialogs/student-dialog/student-dialog.component';
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
import { LagerComponent } from './components/lager/lager.component';
import { LagerDialogComponent } from './components/dialogs/lager-dialog/lager-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorComponent,
    AboutComponent,
    FakultetComponent,
    FakultetDialogComponent,
    StatusComponent,
    StatusDialogComponent,
    DepartmanDialogComponent,
    DepartmanComponent,
    StudentComponent,
    StudentDialogComponent,
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
    LagerComponent,
    LagerDialogComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
