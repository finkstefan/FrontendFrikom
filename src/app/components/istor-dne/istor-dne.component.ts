import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IstorDne } from 'src/app/models/istor_dne';
import { IstorDneService } from 'src/app/services/istor-dne.service';

@Component({
  selector: 'app-istor-dne',
  templateUrl: './istor-dne.component.html',
  styleUrls: ['./istor-dne.component.css']
})
export class IstorDneComponent implements OnInit, OnDestroy {

  displayedColumns = ["idIstorDne","idDatum", "idObjekat","idArtikl", "ulazDobavljac", "ulazMagacin", "povracajDobavljac", "povracajMagacin", "prodaja"];
  dataSource: MatTableDataSource<IstorDne>;
  subscription: Subscription;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(private istorDneService: IstorDneService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData(){
    this.subscription = this.istorDneService.getAllIstorDne()
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
