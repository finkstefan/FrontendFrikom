import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Lanac } from 'src/app/models/lanac';
import { LanacService } from 'src/app/services/lanac.service';
import { LanacDialogComponent } from '../dialogs/lanac-dialog/lanac-dialog.component';

@Component({
  selector: 'app-lanac',
  templateUrl: './lanac.component.html',
  styleUrls: ['./lanac.component.css']
})
export class LanacComponent implements OnInit, OnDestroy {

  displayedColumns = ["idLanac", "lanac", "actions"];
  dataSource: MatTableDataSource<Lanac>;
  subsription: Subscription;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private lanacService: LanacService,
              private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
            
  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subsription = this.lanacService.getAllLanac().subscribe(
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

  public openDialog(flag: number, idLanac?: number, lanac?: string): void {
    const dialogRef = this.dialog.open(LanacDialogComponent, {data: {idLanac, lanac}}); 
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
