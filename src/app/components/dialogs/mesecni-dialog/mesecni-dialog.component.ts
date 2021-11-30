import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mesecni } from 'src/app/models/mesecni';
import { MesecniService } from 'src/app/services/mesecni.service';

@Component({
  selector: 'app-mesecni-dialog',
  templateUrl: './mesecni-dialog.component.html',
  styleUrls: ['./mesecni-dialog.component.css']
})
export class MesecniDialogComponent implements OnInit {

  public flag : number; 

  constructor(public snackBar: MatSnackBar,
    public dialogRef : MatDialogRef<MesecniDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Mesecni,
    public mesecniService: MesecniService) { }

  ngOnInit(): void {

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

