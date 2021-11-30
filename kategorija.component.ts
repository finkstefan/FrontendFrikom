import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { JedMere } from 'src/app/models/jedmere';
import { Kategorija } from 'src/app/models/kategorija';
import { KategorijaService } from 'src/app/services/kategorija.service';
import { KategorijaDialogComponent } from '../dialogs/kategorija-dialog/kategorija-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './kategorija.component.html',
  styleUrls: ['./kategorija.component.css']
})
export class KategorijaComponent implements OnInit, OnDestroy {

  displayedColumns = ["idKategorija","kategorija","potkategorija","actions"];
dataSource: MatTableDataSource<Kategorija>;

subscription: Subscription;
@ViewChild(MatSort,{static: false}) sort: MatSort;
@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private katService:KategorijaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

 

  ngOnDestroy(): void {
this.subscription.unsubscribe();
  }

public loadData(){
 this.subscription = this.katService.getAllKategorije()
  .subscribe(data => {
   // console.log(data);
   this.dataSource = new MatTableDataSource(data);

   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
  }),
  (error: Error) => {
    console.log(error.name + ' ' + error.message);
  }
}



public openDialog(flag:number, idKategorija?:number, kategorija?:string, potkategorija?:string){
const dialogRef = this.dialog.open(KategorijaDialogComponent, {data: {idKategorija,kategorija,potkategorija}});
dialogRef.componentInstance.flag = flag;
dialogRef.afterClosed()
.subscribe(
  result => {
    if(result === 1){
      this.loadData();
    }
  }
)
}

applyFilter(filterValue: string){
  filterValue=filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSource.filter = filterValue;
}

}

