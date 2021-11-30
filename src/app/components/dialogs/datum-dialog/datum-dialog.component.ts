
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatumService } from 'src/app/services/datum.service.service';
import { Component, OnInit, Inject} from '@angular/core'; 
import { Datum } from 'src/app/models/datum';

@Component({
  selector: 'app-datum-dialog',
  templateUrl: './datum-dialog.component.html',
  styles: [
  ]
})
export class DatumDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
  
    public dialogRef: MatDialogRef<DatumDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Datum,
    public datumService: DatumService ) {
     }


  ngOnInit(): void {

  }

  public addDatum (): void {

      this.datumService.addDatum(this.data).subscribe(() => {
        this.snackBar.open('Upesno dodat datum: '+ this.data.datum, 'OK', 
         {duration : 2500})
        }),
        (error: Error) => {
          console.log(error.name + ' ' + error.message);
          this.snackBar.open('Doslo je do greske prilikom dodavanja novog datuma', 'Zatvori', 
         {duration : 2500
        })

        }

  }

  public updateDatum(): void {

    this.datumService.updateDatum(this.data).subscribe(() => {
      this.snackBar.open('Upesno modifikovan datum: '+ this.data.datum, 'OK', 
       {duration : 2500})
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Doslo je do greske prilikom modifikovanja datuma', 'Zatvori', 
       {duration : 2500
        })

      } 

    }

    public deleteDatum() : void {

      this.datumService.deleteDatum(this.data.idDatum).subscribe(() => {
        this.snackBar.open('Upesno obrisan datum: '+ this.data.datum, 'OK', 
         {duration : 2500})
        }),
        (error: Error) => {
          console.log(error.name + ' ' + error.message);
          this.snackBar.open('Doslo je do greske prilikom brisanja datuma', 'Zatvori', 
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


