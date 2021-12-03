import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nielsen } from 'src/app/models/nielsen';
import { NielsenService } from 'src/app/services/nielsen.service';
import { Component, OnInit, Inject} from '@angular/core'; 
import { Artikl } from 'src/app/models/artikl';
import { Objekat } from 'src/app/models/objekat';
import { Datum } from 'src/app/models/datum';
import { ObjekatService } from 'src/app/services/objekat.service';
import { DatumService } from 'src/app/services/datum.service.service';
import { ArtiklService } from 'src/app/services/artikl.service';

@Component({
  selector: 'app-nielsen-dialog',
  templateUrl: './nielsen-dialog.component.html',
  styles: [
  ]
})
export class NielsenDialogComponent implements OnInit {

  public flag: number;
  artikli:Artikl[];
  objekti:Objekat[];
  datumi:Datum[];

  constructor(public snackBar: MatSnackBar,
  
    public dialogRef: MatDialogRef<NielsenDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Nielsen,
    public nielsenService: NielsenService,
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

  public addNielsen (): void {

      this.nielsenService.addNielsen(this.data).subscribe(() => {
        this.snackBar.open('Upesno dodat Nielsen: '+ this.data.idNielsen, 'OK', 
         {duration : 2500})
        }),
        (error: Error) => {
          console.log(error.name + ' ' + error.message);
          this.snackBar.open('Doslo je do greske', 'Zatvori', 
         {duration : 2500
        })

        }

  }

  public updateNielsen(): void {

    this.nielsenService.updateNielsen(this.data).subscribe(() => {
      this.snackBar.open('Uspesno modifikovan Nielsen: '+ this.data.idNielsen, 'OK', 
       {duration : 2500})
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Doslo je do greske', 'Zatvori', 
       {duration : 2500
        })

      } 

    }

    public deleteNielsen() : void {

      this.nielsenService.deleteNielsen(this.data.idNielsen).subscribe(() => {
        this.snackBar.open('Upesno obrisan Nielsen: '+ this.data.idNielsen, 'OK', 
         {duration : 2500})
        }),
        (error: Error) => {
          console.log(error.name + ' ' + error.message);
          this.snackBar.open('Doslo je do greske', 'Zatvori', 
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