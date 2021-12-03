import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nielsen } from 'src/app/models/nielsen';
import { NielsenService } from 'src/app/services/nielsen.service';
import { Component, OnInit, Inject} from '@angular/core'; 

@Component({
  selector: 'app-nielsen-dialog',
  templateUrl: './nielsen-dialog.component.html',
  styles: [
  ]
})
export class NielsenDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
  
    public dialogRef: MatDialogRef<NielsenDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Nielsen,
    public nielsenService: NielsenService ) {
     }


  ngOnInit(): void {

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
      this.snackBar.open('Upesno modifikovan Nielsen: '+ this.data.idNielsen, 'OK', 
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