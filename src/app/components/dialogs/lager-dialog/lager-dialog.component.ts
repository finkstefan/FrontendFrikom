import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Artikl } from 'src/app/models/artikl';

import { Lager } from 'src/app/models/lager';
import { Objekat } from 'src/app/models/objekat';
import { ArtiklService } from 'src/app/services/artikl.service';

import { LagerService } from 'src/app/services/lager.service';
import { ObjekatService } from 'src/app/services/objekat.service';

@Component({
  selector: 'app-lager-dialog',
  templateUrl: './lager-dialog.component.html',
  styleUrls: ['./lager-dialog.component.css']
})
export class LagerDialogComponent implements OnInit {

  public flag: number;
  artikli:Artikl[];
objekti:Objekat[];
  

  constructor(public lagerService: LagerService,
              public artiklService:ArtiklService,
              public objekatService:ObjekatService,
              public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<LagerDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Lager) { }

  ngOnInit(): void {
    
    this.artiklService.getAllArtikli()
    .subscribe((data) => {
      this.artikli = data;
    })
    
      this.objekatService.getAllObjekat()
    .subscribe((data) => {
      this.objekti = data;
    })

  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  public add(): void {
    this.lagerService.addLager(this.data).subscribe(() => {
      this.snackBar.open('Lager uspešno dodat: ' + this.data.idLager, 'OK', {
        duration: 2500
      });
    }),
    (error: Error) => {
      console.log(error);
      this.snackBar.open('Došlo je do greške prilikom dodavanja lagera.', 'Zatvori', {
        duration: 2500
      });
    }
  }

  public update(): void {
    this.lagerService.updateLager(this.data).subscribe(() => {
      this.snackBar.open('Lager uspešno izmenjen: ' + this.data.idLager, 'OK', {
        duration: 2500
      });
    }),
    (error: Error) => {
      console.log(error);
      this.snackBar.open('Došlo je do greške prilikom izmene objekat.', 'Zatvori', {
        duration: 2500
      });
    }
  }

  public delete(): void {
    this.lagerService.deleteLager(this.data.idLager).subscribe(() => {
      this.snackBar.open('Lager uspešno obrisan: ' + this.data.idLager, 'OK', {
        duration: 2500
      });
    }),
    (error: Error) => {
      console.log(error);
      this.snackBar.open('Došlo je do greške prilikom brisanja lagera.', 'Zatvori', {
        duration: 2500
      });
    }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.', 'Zatvori', {
      duration: 1000
    });
  }

}
