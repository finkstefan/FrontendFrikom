import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';
import { DnevniComponent } from './components/grupa/dnevni.component';
import { MatTableModule } from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DnevniDialogComponent } from './components/dialogs/dnevni-dialog/dnevni-dialog.component'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatumComponent } from './components/datum/datum.component';
import { DatumDialogComponent } from './components/dialogs/datum-dialog/datum-dialog.component';
import { MesecniComponent } from './components/mesecni/mesecni.component';
import { MesecniDialogComponent } from './components/dialogs/mesecni-dialog/mesecni-dialog.component';
import { NedeljniComponent } from './components/nedeljni/nedeljni.component';
import { NedeljniDialogComponent } from './components/dialogs/nedeljni-dialog/nedeljni-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorComponent,
    AboutComponent,
    DnevniComponent,
    DnevniDialogComponent,
    DatumComponent,
    DatumDialogComponent,
    MesecniComponent,
    MesecniDialogComponent,
    NedeljniComponent,
    NedeljniDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
