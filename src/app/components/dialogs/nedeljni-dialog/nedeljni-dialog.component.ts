
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nedeljni } from 'src/app/models/nedeljni';
import { NedeljniService } from 'src/app/services/nedeljni.service';
import { Component, OnInit, Inject} from '@angular/core'; 

@Component({
  selector: 'app-ndeljni-dialog',
  templateUrl: './nedeljni-dialog.component.html',
  styles: [
  ]
})
export class NedeljniDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
  
    public dialogRef: MatDialogRef<NedeljniDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Nedeljni,
    public nedeljniService: NedeljniService ) {
     }


  ngOnInit(): void {

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


