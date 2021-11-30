import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KategObjService } from 'src/app/services/kateg-obj.service';
import { KategObj } from 'src/app/models/kateg_obj';
import { Subscription } from 'rxjs';
import { KategObjDialogComponent } from '../dialogs/kateg-obj-dialog/kateg-obj-dialog.component';

@Component({
  selector: 'app-kateg-obj',
  templateUrl: './kateg-obj.component.html',
  styleUrls: ['./kateg-obj.component.css']
})
export class KategObjComponent implements OnInit, OnDestroy {

  displayedColumns = ["idKategObj", "nazivKategorije", "actions"];
  dataSource: MatTableDataSource<KategObj>;
  subscription: Subscription;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private kategObjService: KategObjService,
              private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.kategObjService.getAllKategObj().subscribe(
      data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
    }
  }

  public openDialog(flag: number, idKategObj?: number, nazivKategorije?: string): void {
    const dialogRef = this.dialog.open(KategObjDialogComponent, {data: {idKategObj, nazivKategorije}}); 
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(res => {
      if(res == 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
