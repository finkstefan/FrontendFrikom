import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Artikl } from 'src/app/models/artikl';
import { Datum } from 'src/app/models/datum';
import { Mesecni } from 'src/app/models/mesecni';
import { Objekat } from 'src/app/models/objekat';
import { ArtiklService } from 'src/app/services/artikl.service';
import { DatumService } from 'src/app/services/datum.service.service';
import { MesecniService } from 'src/app/services/mesecni.service';
import { ObjekatService } from 'src/app/services/objekat.service';

@Component({
  selector: 'app-mesecni-dialog',
  templateUrl: './mesecni-dialog.component.html',
  styleUrls: ['./mesecni-dialog.component.css']
})
export class MesecniDialogComponent implements OnInit {

  public flag : number; 
  artikli:Artikl[];
  objekti:Objekat[];
  datumi:Datum[];

  constructor(public snackBar: MatSnackBar,
    public dialogRef : MatDialogRef<MesecniDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Mesecni,
    public mesecniService: MesecniService,
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

  public addMesecni () : void {

    this.mesecniService.addMesecni(this.data).subscribe(() => [
      this.snackBar.open('Uspesno dodat mesecni izvestaj: ' + this.data.idMesecni, 'OK',
      {duration: 2500})
    ]),
    (error: Error) => {
      console.log(error.name+' '+ error.message); 
      this.snackBar.open('Doslo je do greske prilikom dodavanja novog mesecnog izvestaja', 'Zatvori',
       {duration: 2500})
    }

  }

  public updateMesecni () : void {
    
    this.mesecniService.updateMesecni(this.data).subscribe(() => [
      this.snackBar.open('Uspesno izmenjen postojeci mesecni izvestaj: ' + this.data.idMesecni , 'OK',
      {duration: 2500})
    ]),
    (error: Error) => {
      console.log(error.name+' '+ error.message); 
      this.snackBar.open('Doslo je do greske prilikom izmene mesecnog izvestaja', 'Zatvori',
       {duration: 2500})
    }
  }

  public deleteMesecni (): void {

    
    this.mesecniService.deleteMesecni(this.data.idMesecni).subscribe(() => [
      this.snackBar.open('Uspesno obrisan mesecni izvestaj: ' + this.data.idMesecni, 'OK',
      {duration: 2500})
    ]),
    (error: Error) => {
      console.log(error.name+' '+ error.message); 
      this.snackBar.open('Doslo je do greske prilikom brisanja mesecnog izvestaja', 'Zatvori',
       {duration: 2500})
    }

  }

  public cancel() : void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Zatvori', {duration:1000})
  }

}

