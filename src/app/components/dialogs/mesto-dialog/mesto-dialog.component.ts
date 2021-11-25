import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mesto } from 'src/app/models/mesto';
import { MestoService } from 'src/app/services/mesto.service';

@Component({
  selector: 'app-mesto-dialog',
  templateUrl: './mesto-dialog.component.html',
  styleUrls: ['./mesto-dialog.component.css']
})
export class MestoDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar, 
              public dialogRef: MatDialogRef<MestoDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Mesto, 
              public mestoService: MestoService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.mestoService.addMesto(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodato mesto: ' + this.data.nazivMesta, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom dodavanja novog mesta!', 'Zatvori', {
        duration: 2500
      })
    }
  }

  public update(): void {
    this.mestoService.updateMesto(this.data).subscribe(() => {
      this.snackBar.open('Uspešno modifikovano mesto: ' + this.data.nazivMesta, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom izmene mesta!', 'Zatvori', {
        duration: 2500
      })
    }
  }

  public delete(): void {
    this.mestoService.deleteMesto(this.data.idMesto).subscribe(() => {
      this.snackBar.open('Uspešno obrisano mesto: ' + this.data.nazivMesta, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom brisanja mesta!', 'Zatvori', {
        duration: 2500
      })
    }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!', 'Zatvori', {
      duration: 2500
    })
  }
  
}
