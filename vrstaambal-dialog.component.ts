import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VrstaAmbal } from 'src/app/models/vrstaambal';
import { VrstaAmbalService } from 'src/app/services/vrstaambal.service';

@Component({
  selector: 'app-fakultet-dialog',
  templateUrl: './vrstaambal-dialog.component.html',
  styleUrls: ['./vrstaambal-dialog.component.css']
})
export class VrstaAmbalDialogComponent implements OnInit {

public flag: number;

  constructor(public snackBar:MatSnackBar, public dialogRef:MatDialogRef<VrstaAmbalDialogComponent>, @Inject (MAT_DIALOG_DATA) public data: VrstaAmbal, public vaService: VrstaAmbalService) { }

  ngOnInit(): void {
  }

 

public add(): void{
  this.vaService.addVrstaAmbal(this.data)
  .subscribe( data =>{
    this.snackBar.open('Uspesno dodata vrsta ambalaze: ' + this.data.vrstaAmbalaze, 'U redu', { duration: 2500 });
  } );
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska!. ', 'Zatvori', { duration: 2500 });
  }
}

public update(): void{
  this.vaService.updateVrstaAmbal(this.data)
  .subscribe(data => {
    this.snackBar.open('Uspesno izmenjena vrsta ambalaze: ' + this.data.vrstaAmbalaze, 'U redu', { duration: 2500 });
  });
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska!. ', 'Zatvori', { duration: 2500 });
  }
}

public delete(): void{
  this.vaService.deleteVrstaAmbal(this.data.idVrstaAmbalaze)
  .subscribe(data => {
    this.snackBar.open('Uspesno obrisana vrsta ambalaze', 'U redu', { duration: 2500 });
  });
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska! ', 'Zatvori', { duration: 2500 });
  }
}


public close(): void{
this.dialogRef.close();

}

}
