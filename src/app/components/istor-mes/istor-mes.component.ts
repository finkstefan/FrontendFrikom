import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IstorMes } from 'src/app/models/istor_mes';
import { IstorMesService } from 'src/app/services/istor-mes.service';

@Component({
  selector: 'app-istor-mes',
  templateUrl: './istor-mes.component.html',
  styleUrls: ['./istor-mes.component.css']
})
export class IstorMesComponent implements OnInit, OnDestroy {

  displayedColumns = ["idIstorMes","idDatumOd","idDatumDo", "idObjekat","idArtikl", "prodaja"];
  dataSource: MatTableDataSource<IstorMes>;
  subscription: Subscription;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(private istorMesService: IstorMesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData(){
    this.subscription = this.istorMesService.getAllIstorMes()
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
