import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KategObj } from 'src/app/models/kateg_obj';
import { Lanac } from 'src/app/models/lanac';
import { Mesto } from 'src/app/models/mesto';
import { Objekat } from 'src/app/models/objekat';
import { KategObjService } from 'src/app/services/kateg-obj.service';
import { LanacService } from 'src/app/services/lanac.service';
import { MestoService } from 'src/app/services/mesto.service';
import { ObjekatService } from 'src/app/services/objekat.service';

@Component({
  selector: 'app-objekat-dialog',
  templateUrl: './objekat-dialog.component.html',
  styleUrls: ['./objekat-dialog.component.css']
})
export class ObjekatDialogComponent implements OnInit {

  public flag: number;
  public kategorije: KategObj[];
  public mesta: Mesto[];
  public lanci: Lanac[];

  constructor(public objekatService: ObjekatService,
              public kategObjService: KategObjService,
              public mestoService: MestoService,
              public lanacService: LanacService,
              public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ObjekatDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Objekat) { }

  ngOnInit(): void {
    this.kategObjService.getAllKategObj().subscribe(
      data => {
        this.kategorije = data;
      }
    );
    this.mestoService.getAllMesto().subscribe(
      data => {
        this.mesta = data;
      }
    );
    this.lanacService.getAllLanac().subscribe(
      data => {
        this.lanci = data;
      }
    );
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  public add(): void {
    this.objekatService.addObjekat(this.data).subscribe(() => {
      this.snackBar.open('Objekat uspešno dodat: ' + this.data.idObjekat, 'OK', {
        duration: 2500
      });
    }),
    (error: Error) => {
      console.log(error);
      this.snackBar.open('Došlo je do greške prilikom dodavanja objekta.', 'Zatvori', {
        duration: 2500
      });
    }
  }

  public update(): void {
    this.objekatService.updateObjekat(this.data).subscribe(() => {
      this.snackBar.open('Objekat uspešno izmenjen: ' + this.data.idObjekat, 'OK', {
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
    this.objekatService.deleteObjekat(this.data.idObjekat).subscribe(() => {
      this.snackBar.open('Objekat uspešno obrisan: ' + this.data.idObjekat, 'OK', {
        duration: 2500
      });
    }),
    (error: Error) => {
      console.log(error);
      this.snackBar.open('Došlo je do greške prilikom brisanja objekta.', 'Zatvori', {
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
