import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { JedMere } from 'src/app/models/jedmere';
import { JedMereService } from 'src/app/services/jedmere.service';
import { JedMereDialogComponent } from '../dialogs/jedmere-dialog/jedmere-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './jedmere.component.html',
  styleUrls: ['./jedmere.component.css']
})
export class JedMereComponent implements OnInit, OnDestroy {

  displayedColumns = ["idJedMere","jedinicaMere","actions"];
dataSource: MatTableDataSource<JedMere>;

subscription: Subscription;
@ViewChild(MatSort,{static: false}) sort: MatSort;
@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private jmService:JedMereService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

 

  ngOnDestroy(): void {
this.subscription.unsubscribe();
  }

public loadData(){
 this.subscription = this.jmService.getAllJedMere()
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



public openDialog(flag:number, idJedMere?:number, jedinicaMere?:string){
const dialogRef = this.dialog.open(JedMereDialogComponent, {data: {idJedMere,jedinicaMere}});
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
