import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { KategObj } from 'src/app/models/kateg_obj';
import { Lanac } from 'src/app/models/lanac';
import { Mesto } from 'src/app/models/mesto';
import { Objekat } from 'src/app/models/objekat';
import { ObjekatService } from 'src/app/services/objekat.service';
import { ObjekatDialogComponent } from '../dialogs/objekat-dialog/objekat-dialog.component';

@Component({
  selector: 'app-objekat',
  templateUrl: './objekat.component.html',
  styleUrls: ['./objekat.component.css']
})
export class ObjekatComponent implements OnInit, OnDestroy {

  displayedColumns = ['idObjekat', 'nazivObjekta', 'adresa', 'status', 'format', 'regija', 'kategObj', 'mesto', 'lanac', 'actions'];
  dataSource: MatTableDataSource<Objekat>;
  subscription: Subscription;
  // selektovanObjekat: Objekat;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private objekatService: ObjekatService,
              private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.objekatService.getAllObjekat().subscribe(
      data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return key === 'kategObj' ? currentTerm + data.kategObj.nazivKategorije : currentTerm + data[key];
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        this.dataSource.sortingDataAccessor = (data, property) => {
          switch (property) {
            case 'kategObj': return data.kategObj.nazivKategorije.toLocaleLowerCase();
            default: return data[property];
          }
        };

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
    )
  }

  public openDialog(flag: number, idObjekat?: number, nazivObjekta?: string, adresa?: string, status?: string, format?: string, regija?: string, kategObj?: KategObj, mesto?: Mesto, lanac?: Lanac): void {
    const dialogRef = this.dialog.open(ObjekatDialogComponent,
      {
        data: {idObjekat, nazivObjekta, adresa, status, format, regija, kategObj, mesto, lanac}
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
