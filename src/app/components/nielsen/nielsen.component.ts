import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Artikl } from 'src/app/models/artikl';
import { Datum } from 'src/app/models/datum';
import { Nielsen } from 'src/app/models/nielsen';
import { Objekat } from 'src/app/models/objekat';
import {NielsenService} from 'src/app/services/nielsen.service';
import { DatumComponent } from '../datum/datum.component';
import { NielsenDialogComponent } from '../dialogs/nielsen-dialog/nielsen-dialog.component';

@Component({
  selector: 'app-nielsen',
  templateUrl: './nielsen.component.html',
  styleUrls: ['./nielsen.component.css']
})
export class NielsenComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  displayedColumns = ['idNielsen', 'prodaja', 'objekat','datum1','datum2','artikl','actions'];
  dataSource: MatTableDataSource<Nielsen>;



@ViewChild(MatSort, {static : false}) sort :MatSort; 
@ViewChild(MatPaginator, {static : false}) paginator : MatPaginator;

  constructor(private nielsenService : NielsenService,
    private dialog: MatDialog) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData(); 

  }

  public loadData() {
    this.subscription = this.nielsenService.getAllNielsens().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort; 
        this.dataSource.paginator = this.paginator;
      }
    ),

    (error: Error) => {
      console.log(error.name+' '+error.message)
    }
  }

  public openDialog(flag: number, idNielsen?: number, prodaja?:number, objekat?:Objekat, artikl?:Artikl, datum1?:Datum, datum2?:Datum) :void {

    const dialogRef = this.dialog.open (NielsenDialogComponent, {data: {idNielsen,prodaja, objekat, artikl,datum1,datum2}});
    dialogRef.componentInstance.flag = flag; 
    dialogRef.afterClosed().subscribe(res => {
      if(res==1)
      {
        this.loadData(); 
      }
    })
  }

  applyFilter(filterValue : string) {

    filterValue = filterValue.trim(); 
    
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }




}