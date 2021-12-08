import { NumberFormatStyle } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Lager } from 'src/app/models/lager';
import { LagerService } from 'src/app/services/lager.service';
import { ObjekatDialogComponent } from '../dialogs/lager-dialog/lager-dialog.component';

@Component({
  selector: 'app-lager',
  templateUrl: './lager.component.html',
  styleUrls: ['./lager.component.css']
})
export class LagerComponent implements OnInit, OnDestroy {

  displayedColumns = ['idLager', 'stanje', 'artikl', 'objekat', 'actions'];
  dataSource: MatTableDataSource<Lager>;
  subscription: Subscription;


  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private lagerService: LagerService,
              private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.lagerService.getAllLageri().subscribe(
      data => {
      
        this.dataSource = new MatTableDataSource(data);

        

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
    )
  }

  public openDialog(flag: number, idLager?: number, stanje?: number, artikl?: number, objekat?: number): void {
    const dialogRef = this.dialog.open(ObjekatDialogComponent,
      {
        data: {idLager, stanje, artikl, objekat}
      });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(res => {
      if(res == 1) {
        this.loadData();
      }
    })
  }

  selectRow(row) {
    // this.selektovanObjekat = row;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
