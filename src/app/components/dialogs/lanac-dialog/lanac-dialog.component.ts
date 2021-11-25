import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lanac } from 'src/app/models/lanac';
import { LanacService } from 'src/app/services/lanac.service';

@Component({
  selector: 'app-lanac-dialog',
  templateUrl: './lanac-dialog.component.html',
  styleUrls: ['./lanac-dialog.component.css']
})
export class LanacDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar, 
              public dialogRef: MatDialogRef<LanacDialogComponent>, 
              @Inject (MAT_DIALOG_DATA) public data: Lanac, 
              public lanacService: LanacService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.lanacService.addLanac(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodat lanac: ' + this.data.lanac, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom dodavanja novog lanca!', 'Zatvori', {
        duration: 2500
      })
    }
  }

  public update(): void {
    this.lanacService.updateLanac(this.data).subscribe(() => {
      this.snackBar.open('Uspešno modifikovan lanac: ' + this.data.lanac, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom izmene lanca!', 'Zatvori', {
        duration: 2500
      })
    }
  }

  public delete(): void {
    this.lanacService.deleteLanac(this.data.idLanac).subscribe(() => {
      this.snackBar.open('Uspešno obrisan lanac: ' + this.data.lanac, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom brisanja lanca!', 'Zatvori', {
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
