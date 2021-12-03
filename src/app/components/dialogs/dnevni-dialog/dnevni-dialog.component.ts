import { Component, Inject, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dnevni } from 'src/app/models/dnevni';
import { Artikl } from 'src/app/models/artikl';
import { Objekat } from 'src/app/models/objekat';
import { Datum } from 'src/app/models/datum';
import { DnevniService } from 'src/app/services/dnevni.service';
import { ObjekatService } from 'src/app/services/objekat.service';
import { ArtiklService } from 'src/app/services/artikl.service';
import { DatumService } from 'src/app/services/datum.service.service';

@Component({
  selector: 'app-dnevni-dialog',
  templateUrl: './dnevni-dialog.component.html',
  styleUrls: ['./dnevni-dialog.component.css']
})
export class DnevniDialogComponent implements OnInit {

  public flag:number;
  artikli:Artikl[];
objekti:Objekat[];
datumi:Datum[];

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DnevniDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Dnevni,
    public dnevniService : DnevniService,
    public artiklService: ArtiklService,
    public objekatService: ObjekatService,
    public datumService: DatumService) { }

  ngOnInit(): void {
   
    this.artiklService.getAllArtikli().subscribe(
      data => {
        this.artikli = data;
      }
    );

    this.objekatService.getAllObjekat().subscribe(
      data => {
        this.objekti = data;
      }
    );

    this.datumService.getAllDatum().subscribe(
      data => {
        this.datumi = data;
      }
    );
    }

    compareTo(a ,b) {
      return a.id == b.id;
    }


    public addDnevni(): void {
      this.dnevniService.addDnevni(this.data)
      .subscribe(() => {
        this.snackBar.open('Dnevni izvestaj uspešno dodat: ' + this.data.idDnevni, 'OK', {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name + ' ' +error.message);
        this.snackBar.open('Došlo je do greške prilikom dodavanja dnevnog izvestaja: ' + this.data.idDnevni, 'Zatvori', {
          duration: 2500
        })
      }
    }

    
    public updateDnevni(): void {
      this.dnevniService.updateDnevni(this.data)
      .subscribe(() => {
        this.snackBar.open('Dnevni izvestaj uspešno izmenjen: ' + this.data.idDnevni, 'OK', {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name + ' ' +error.message);
        this.snackBar.open('Došlo je do greške prilikom izmene dnevnog izvestaja: ' + this.data.idDnevni, 'Zatvori', {
          duration: 2500
        })
      }
    }

    
    public deleteDnevni(): void {
      this.dnevniService.deleteDnevni(this.data.idDnevni)
      .subscribe(() => {
        this.snackBar.open('Dnevni izvestaj uspešno obrisan: ' + this.data.datum, 'OK', {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name + ' ' +error.message);
        this.snackBar.open('Došlo je do greške prilikom brisanja dnevnog izvestaja: ' + this.data.idDnevni, 'Zatvori', {
          duration: 2500
        })
      }
    }

    public cancel() : void {
      this.dialogRef.close();
      this.snackBar.open('Odustali ste', 'Zatvori', {duration:1000})
    }



}
