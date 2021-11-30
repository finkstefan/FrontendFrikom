import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JedMere } from 'src/app/models/jedmere';
import { VrstaAmbal } from 'src/app/models/vrstaambal';
import { JedMereService } from 'src/app/services/jedmere.service';

@Component({
  selector: 'app-fakultet-dialog',
  templateUrl: './jedmere-dialog.component.html',
  styleUrls: ['./jedmere-dialog.component.css']
})
export class JedMereDialogComponent implements OnInit {

public flag: number;

  constructor(public snackBar:MatSnackBar, public dialogRef:MatDialogRef<JedMereDialogComponent>, @Inject (MAT_DIALOG_DATA) public data: JedMere, public jmService: JedMereService) { }

  ngOnInit(): void {
  }

  

public add(): void{
  this.jmService.addJedMere(this.data)
  .subscribe( data =>{
    this.snackBar.open('Uspesno dodata jedinica mere: ' + this.data.jedinicaMere, 'U redu', { duration: 2500 });
  } );
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska!', 'Zatvori', { duration: 2500 });
  }
}

public update(): void{
  this.jmService.updateJedMere(this.data)
  .subscribe(data => {
    this.snackBar.open('Uspesno izmenjena jedinica mere: ' + this.data.jedinicaMere, 'U redu', { duration: 2500 });
  });
  (error:Error) => {
    console.log(error.name + ' -> ' + error.message)
    this.snackBar.open('Greska! ', 'Zatvori', { duration: 2500 });
  }
}

public delete(): void{
  this.jmService.deleteJedMere(this.data.idJedMere)
  .subscribe(data => {
    this.snackBar.open('Uspesno obrisana jedinica mere', 'U redu', { duration: 2500 });
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

