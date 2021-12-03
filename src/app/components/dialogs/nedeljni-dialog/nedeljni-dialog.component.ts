
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nedeljni } from 'src/app/models/nedeljni';
import { NedeljniService } from 'src/app/services/nedeljni.service';
import { Component, OnInit, Inject} from '@angular/core'; 
import { Artikl } from 'src/app/models/artikl';
import { Objekat } from 'src/app/models/objekat';
import { Datum } from 'src/app/models/datum';
import { ArtiklService } from 'src/app/services/artikl.service';
import { ObjekatService } from 'src/app/services/objekat.service';
import { DatumService } from 'src/app/services/datum.service.service';

@Component({
  selector: 'app-ndeljni-dialog',
  templateUrl: './nedeljni-dialog.component.html',
  styles: [
  ]
})
export class NedeljniDialogComponent implements OnInit {

  public flag: number;
  artikli:Artikl[];
  objekti:Objekat[];
  datumi:Datum[];

  constructor(public snackBar: MatSnackBar,
  
    public dialogRef: MatDialogRef<NedeljniDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Nedeljni,
    public nedeljniService: NedeljniService,
    public artiklService: ArtiklService,
    public objekatService: ObjekatService,
    public datumService: DatumService ) {
     }


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

  public addNedeljni (): void {

      this.nedeljniService.addNedeljni(this.data).subscribe(() => {
        this.snackBar.open('Upesno dodat nedeljni izvetaj: '+ this.data.idNedeljni, 'OK', 
         {duration : 2500})
        }),
        (error: Error) => {
          console.log(error.name + ' ' + error.message);
          this.snackBar.open('Doslo je do greske prilikom dodavanja novog nedeljnog izvestaja', 'Zatvori', 
         {duration : 2500
        })

        }

  }

  public updateNedeljni(): void {

    this.nedeljniService.updateNedeljni(this.data).subscribe(() => {
      this.snackBar.open('Upesno modifikovan ndeljni izvestaj: '+ this.data.idNedeljni, 'OK', 
       {duration : 2500})
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Doslo je do greske prilikom modifikovanja nedeljnog izvestaja', 'Zatvori', 
       {duration : 2500
        })

      } 

    }

    public deleteNedeljni() : void {

      this.nedeljniService.deleteNedeljni(this.data.idNedeljni).subscribe(() => {
        this.snackBar.open('Upesno obrisan nedeljni izvestaj: '+ this.data.idNedeljni, 'OK', 
         {duration : 2500})
        }),
        (error: Error) => {
          console.log(error.name + ' ' + error.message);
          this.snackBar.open('Doslo je do greske prilikom brisanja nedeljnog izvestaja', 'Zatvori', 
         {duration : 2500
          })
  
        } 
    }

    public cancel(): void {
      this.dialogRef.close(); 
      this.snackBar.open('Odustali ste.', 'Zatvori', {
        duration: 1000}) 
    }


}


