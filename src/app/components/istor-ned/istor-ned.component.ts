import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IstorNed } from 'src/app/models/istor_ned';
import { IstorNedService } from 'src/app/services/istor-ned.service';

@Component({
  selector: 'app-istor-ned',
  templateUrl: './istor-ned.component.html',
  styleUrls: ['./istor-ned.component.css']
})
export class IstorNedComponent implements OnInit, OnDestroy {

  displayedColumns = ["idIstorNed","datum1","datum2", "objekat","artikl", "prodaja"];
  dataSource: MatTableDataSource<IstorNed>;
  subscription: Subscription;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(private istorNedService: IstorNedService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData(){
    this.subscription = this.istorNedService.getAllIstorNed()
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
