import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JedMere } from 'src/app/models/jedmere';
import { Artikl } from 'src/app/models/artikl';
import { VrstaAmbal } from 'src/app/models/vrstaambal';
import { ArtiklService } from 'src/app/services/artikl.service';
import { JedMereService } from 'src/app/services/jedmere.service';
import { VrstaAmbalService } from 'src/app/services/vrstaambal.service';

@Component({
  selector: 'app-artikl-dialog',
  templateUrl: './artikl-dialog.component.html',
  styleUrls: ['./artikl-dialog.component.css']
})
export class ArtiklDialogComponent implements OnInit {

public flag: number;
jediniceMere:JedMere[];
vrsteAmbal:VrstaAmbal[];

  constructor(public snackBar:MatSnackBar, public dialogRef:MatDialogRef<ArtiklDialogComponent>, @Inject (MAT_DIALOG_DATA) public data: Artikl, public arService: ArtiklService,public jedMereService: JedMereService, public vrstaAmbalService: VrstaAmbalService) { }

  ngOnInit(): void {
    this.jedMereService.getAllJedMere()
.subscribe((data) => {
  this.jediniceMere = data;
})

  this.vrstaAmbalService.getAllVrsteAmbal()
.subscribe((data) => {
  this.vrsteAmbal = data;
})
  }



public add(): void{
  this.arService.addArtikl(this.data)
  .subscribe( data =>{
    this.snackBar.open('Uspesno dodat artikl: ' + this.data.naziv, 'U redu', { duration: 2500 });
  } );
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska! ', 'Zatvori', { duration: 2500 });
  }
}

public update(): void{
  this.arService.updateArtikl(this.data)
  .subscribe(data => {
    this.snackBar.open('Uspesno izmenjen artikl: ' + this.data.naziv, 'U redu', { duration: 2500 });
  });
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska! ', 'Zatvori', { duration: 2500 });
  }
}

public delete(): void{
  this.arService.deleteArtikl(this.data.idArtikl)
  .subscribe(data => {
    this.snackBar.open('Uspesno obrisan artikl', 'U redu', { duration: 2500 });
  });
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska! ', 'Zatvori', { duration: 2500 });
  }
}

compareTo(a,b){
  return a.id == b.id;
}

public close(): void{
this.dialogRef.close();

}

}