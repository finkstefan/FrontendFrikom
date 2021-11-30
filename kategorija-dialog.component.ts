import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JedMere } from 'src/app/models/jedmere';
import { Kategorija } from 'src/app/models/kategorija';
import { KategorijaService } from 'src/app/services/kategorija.service';

@Component({
  selector: 'app-fakultet-dialog',
  templateUrl: './kategorija-dialog.component.html',
  styleUrls: ['./kategorija-dialog.component.css']
})
export class KategorijaDialogComponent implements OnInit {

public flag: number;

  constructor(public snackBar:MatSnackBar, public dialogRef:MatDialogRef<KategorijaDialogComponent>, @Inject (MAT_DIALOG_DATA) public data: Kategorija, public katService: KategorijaService) { }

  ngOnInit(): void {
  }



public add(): void{
  this.katService.addKategorija(this.data)
  .subscribe( data =>{
    this.snackBar.open('Uspesno dodata kategorija: ' + this.data.kategorija, 'U redu', { duration: 2500 });
  } );
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska!', 'Zatvori', { duration: 2500 });
  }
}

public update(): void{
  this.katService.updateKategorija(this.data)
  .subscribe(data => {
    this.snackBar.open('Uspesno izmenjena kategorija: ' + this.data.kategorija, 'U redu', { duration: 2500 });
  });
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska!', 'Zatvori', { duration: 2500 });
  }
}

public delete(): void{
  this.katService.deleteKategorija(this.data.idKategorija)
  .subscribe(data => {
    this.snackBar.open('Uspesno obrisana kategorija', 'U redu', { duration: 2500 });
  });
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska!', 'Zatvori', { duration: 2500 });
  }
}

public close(): void{
this.dialogRef.close();

}

}


