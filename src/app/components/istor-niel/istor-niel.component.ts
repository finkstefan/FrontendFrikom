import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IstorNiel } from 'src/app/models/istor_niel';
import { IstorNielService } from 'src/app/services/istor-niel.service';

@Component({
  selector: 'app-istor-niel',
  templateUrl: './istor-niel.component.html',
  styleUrls: ['./istor-niel.component.css']
})
export class IstorNielComponent implements OnInit, OnDestroy {

  displayedColumns = ["idIstorNiel","idDatumOd","idDatumDo","idArtikl", "prodaja"];
  dataSource: MatTableDataSource<IstorNiel>;
  subscription: Subscription;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(private istorNielService: IstorNielService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData(){
    this.subscription = this.istorNielService.getAllIstorNiel()
     .subscribe(data => {
       console.log(data);
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
