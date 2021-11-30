import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Datum } from 'src/app/models/datum';
import { DatumService } from 'src/app/services/datum.service.service';
import { DatumDialogComponent } from '../dialogs/datum-dialog/datum-dialog.component';

@Component({
  selector: 'app-datum',
  templateUrl: './datum.component.html',
  styleUrls: ['./datum.component.css']
})
export class DatumComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  displayedColumns = ['idDatum', 'datum','actions'];
  dataSource: MatTableDataSource<Datum>;

  @ViewChild(MatSort, {static : false}) sort :MatSort; 
  @ViewChild(MatPaginator, {static : false}) paginator : MatPaginator;

  constructor(private datumService: DatumService,
    private dialog: MatDialog) { }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    this.loadData();
  }

  public loadData() {

    this.subscription = this.datumService.getAllDatum().subscribe(
      data => {
        this.dataSource= new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }

      ),

      (error: Error) => {
        console.log(error.name +' '+ error.message)
      }
  }

  public openDialog(flag: number, idDatum? : number, datum? : Date): void {
    const dialogRef = this.dialog.open(DatumDialogComponent, {data: {idDatum,datum}} );
   
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(res => {
      if(res===1)
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


}
