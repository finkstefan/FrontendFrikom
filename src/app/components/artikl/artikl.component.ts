import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Artikl } from 'src/app/models/artikl';
import { Departman } from 'src/app/models/departman';
import { Fakultet } from 'src/app/models/fakultet';
import { JedMere } from 'src/app/models/jedmere';
import { VrstaAmbal } from 'src/app/models/vrstaambal';
import { ArtiklService } from 'src/app/services/artikl.service';
import { DepartmanDialogComponent } from '../dialogs/departman-dialog/departman-dialog.component';

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit, OnDestroy {

displayedColumns = ["idArtikl","cenaBezpdv","cenaPdv","eonKod","komercijalnoPakovanje","maloprodajnaCena","naziv","promena","rok","transportniBarKod","transportnihPakovanja","zapremina","jedMere","vrstaAmbal","actions"];
dataSource: MatTableDataSource<Artikl>;
artiklSubscription: Subscription;
selektovaniDepartman: Departman;
@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
@ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(public artiklService:ArtiklService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void{
    this.artiklSubscription.unsubscribe;
  }

  public loadData(){
this.artiklSubscription = this.artiklService.getAllArtikli()
   .subscribe(data => {
       this.dataSource = new MatTableDataSource(data);
       this.dataSource.paginator=this.paginator;
       this.dataSource.sort = this.sort;


     

       // sortiranje po nazivu ugnježdenog objekta
       /*
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property) {
          case 'fakultet': return data.fakultet.naziv.toLocaleLowerCase();
          default: return data[property];
        }
      }; */
   }),
   (error:Error) => {
    console.log(error.name + ' ' + error.message);
   }
  }

  public openDialog(flag:number,idArtikl?:number,cenaBezpdv?:number,cenaPdv?:number,eonKod?:string,komercijalnoPakovanje?:number,maloprodajnaCena?:number,naziv?:string,promena?:number,rok?:number,transportniBarKod?:string,transportnihPakovanja?:number,zapremina?:number,jedMere?:JedMere,vrstaAmbal?:VrstaAmbal){
const dialogRef = this.dialog.open(DepartmanDialogComponent,{data: {idArtikl,cenaBezpdv,cenaPdv,eonKod,komercijalnoPakovanje,maloprodajnaCena,naziv,promena,rok,transportniBarKod,transportnihPakovanja,zapremina,jedMere,vrstaAmbal}});
dialogRef.componentInstance.flag=flag;

dialogRef.afterClosed()
.subscribe(
  result => {
    if(result === 1){
      this.loadData();
    }
  }
)
  }

  selectRow(row:any){
    this.selektovaniDepartman=row;
  }

  applyFilter(filterValue: string){
    filterValue=filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}

