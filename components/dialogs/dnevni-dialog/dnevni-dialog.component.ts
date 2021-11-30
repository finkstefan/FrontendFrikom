import { Component, Inject, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dnevni } from 'src/app/models/dnevni';
import {Smer} from 'src/app/models/smer';
import { DnevniService } from 'src/app/services/dnevni.service';
import { SmerService } from 'src/app/services/smer.service';
@Component({
  selector: 'app-dnevni-dialog',
  templateUrl: './dnevni-dialog.component.html',
  styleUrls: ['./dnevni-dialog.component.css']
})
export class DnevniDialogComponent implements OnInit {

  public flag:number;
  smerovi: Smer[]; 

  constructor(public smerService : SmerService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DnevniDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Dnevni,
    public dnevniService : DnevniService) { }

  ngOnInit(): void {
   
    /*this.smerService.getAllSmerovi().subscribe(
      data => {
        this.smerovi = data;
      }
    );*/
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
