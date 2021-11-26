import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IstorCena } from 'src/app/models/istor_cena';
import { IstorCenaService } from 'src/app/services/istor-cena.service';

@Component({
  selector: 'app-istor-cena',
  templateUrl: './istor-cena.component.html',
  styleUrls: ['./istor-cena.component.css']
})
export class IstorCenaComponent implements OnInit, OnDestroy {

  displayedColumns = ["idIstorCena"];
  dataSource: MatTableDataSource<IstorCena>;
  subscription: Subscription;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(private istorCenaService: IstorCenaService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData(){
    this.subscription = this.istorCenaService.getAllIstorCena()
     .subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
     }),
     (error: Error) => {
       console.log(error.name + ' ' + error.message);
     }
   }

   applyFilter(filterValue: string){
    filterValue=filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
