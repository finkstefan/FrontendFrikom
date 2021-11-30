import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Mesto } from 'src/app/models/mesto';
import { MestoService } from 'src/app/services/mesto.service';
import { MestoDialogComponent } from '../dialogs/mesto-dialog/mesto-dialog.component';

@Component({
  selector: 'app-mesto',
  templateUrl: './mesto.component.html',
  styleUrls: ['./mesto.component.css']
})
export class MestoComponent implements OnInit, OnDestroy {

  displayedColumns = ["idMesto", "nazivMesta", "actions"];
  dataSource: MatTableDataSource<Mesto>;
  subscription: Subscription;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(private mestoService: MestoService,
              private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.mestoService.getAllMesto().subscribe(
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

  public openDialog(flag: number, idMesto?: number, nazivMesta?: string) {
    const dialogRef = this.dialog.open(MestoDialogComponent, {data: {idMesto, nazivMesta}});
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
