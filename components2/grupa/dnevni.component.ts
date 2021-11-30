import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Dnevni } from 'src/app/models/dnevni';
import { Smer } from 'src/app/models/smer';
import { DnevniService } from 'src/app/services/dnevni.service';
import { DnevniDialogComponent } from '../dialogs/dnevni-dialog/dnevni-dialog.component';

@Component({
  selector: 'app-dnevni',
  templateUrl: './dnevni.component.html',
  styleUrls: ['./dnevni.component.css']
})
export class DnevniComponent implements OnInit, OnDestroy {

  displayedColumns = ['idDnevni', 'datum', 'objekat', 'artikl','ulazDobavljac','ulazMagacin','povracajDobavljac','povracajMagacin','prodaja','actions'];
  dataSource : MatTableDataSource<Dnevni>;
  subscription: Subscription;
  selektovaniDnevni: Dnevni;

  
  @ViewChild(MatSort, {static : false}) sort :MatSort; 
  @ViewChild(MatPaginator, {static : false}) paginator : MatPaginator;

  constructor(private dnevniService:DnevniService,
    private dialog: MatDialog) { }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
   this.subscription =  this.dnevniService.getAllDnevni().subscribe(
    data => {

      this.dataSource = new MatTableDataSource(data);

      this.dataSource.filterPredicate = (data, filter: string) =>{
        const accumulator = (currentTerm, key) => {
          //return key === 'smer' ? currentTerm + data.smer.naziv : currentTerm + data[key];
        }
        const dataStr = Object.keys(data).reduce(accumulator,'').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          //case 'smer': return data.smer.naziv.toLowerCase();

          default: return data[property];
        }
      };
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  ),

  (error: Error) => {
    console.log(error.name+' '+error.message)
  }
}
//obavezni parametar je flag 
 public openDialog( flag: number, idDnevni? : number, datum? : number, objekat?: number, artikl?:number, ulazDobavljac?:number, ulazMagacin?:number, povracajDobavljac?:number, povracajMagacin?:number, prodaja?:number) : void {

  const dialogRef = this.dialog.open (DnevniDialogComponent, {data: {idDnevni, datum, objekat,artikl,ulazDobavljac,ulazMagacin,povracajDobavljac,povracajMagacin,prodaja}});
  dialogRef.componentInstance.flag = flag; 
  //ovo sluzi da bismo mogli da menjamo iz ove glase preko componentinstance 
 //NA OBZERVABLU SE MORAMO SUBSCRIBE
 
  dialogRef.afterClosed().subscribe(res => 
    {
      if(res==1)
      {
        this.loadData(); 
      }
    })
 }

 applyFilter(filterValue : string) {

  filterValue = filterValue.trim(); 
  //trimuju se spejsovi 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

  selectRow(row: any) {
    //console.log(row);
    this.selektovaniDnevni = row;
    //dok god nismo kliknuli na red, nasa varijabla ce iamti null vrednost
    //cim se klikne na red, setuje se odmah 
    //sad unosis u html ovaj uslov 

  }

}
