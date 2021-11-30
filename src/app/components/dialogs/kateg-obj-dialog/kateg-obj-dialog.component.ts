import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KategObj } from 'src/app/models/kateg_obj';
import { KategObjService } from 'src/app/services/kateg-obj.service';

@Component({
  selector: 'app-kateg-obj-dialog',
  templateUrl: './kateg-obj-dialog.component.html',
  styleUrls: ['./kateg-obj-dialog.component.css']
})
export class KategObjDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar, 
              public dialogRef: MatDialogRef<KategObjDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: KategObj,
              public kategObjService: KategObjService) { }

  ngOnInit(): void {
  }
  
  public add(): void {
    this.kategObjService.addKategObj(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodata kategorija objekta: ' + this.data.nazivKategorije, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom dodavanja nove kategorije objekta!', 'Zatvori', {
        duration: 2500
      })
    }
  }

  public update(): void {
    this.kategObjService.updateKategObj(this.data).subscribe(() => {
      this.snackBar.open('Uspešno modifikovana kategorija objekta: ' + this.data.nazivKategorije, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom izmene kategorije objekta!', 'Zatvori', {
        duration: 2500
      })
    }
  }

  public delete(): void {
    this.kategObjService.deleteKategObj(this.data.idKategObj).subscribe(() => {
      this.snackBar.open('Uspešno obrisana kategorija objekta: ' + this.data.nazivKategorije, 'Ok', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom brisanja kategorije objekta!', 'Zatvori', {
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
