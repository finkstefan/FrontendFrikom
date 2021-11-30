import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Mesecni } from 'src/app/models/mesecni';
import {MesecniService} from 'src/app/services/mesecni.service';
import { MesecniDialogComponent } from '../dialogs/mesecni-dialog/mesecni-dialog.component';

@Component({
  selector: 'app-mesecni',
  templateUrl: './mesecni.component.html',
  styleUrls: ['./mesecni.component.css']
})

export class MesecniComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  
  displayedColumns = ['idMesecni', 'prodaja', 'objekat', 'artikl','datum1','datum2','actions'];
  dataSource: MatTableDataSource<Mesecni>;


//komunikacija izmedju html i ts
@ViewChild(MatSort, {static : false}) sort :MatSort; 
@ViewChild(MatPaginator, {static : false}) paginator : MatPaginator;

  constructor(private mesecniService : MesecniService,
    private dialog: MatDialog) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData(); 

  }

  public loadData() {
    this.subscription = this.mesecniService.getAllMesecni().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort; 
        this.dataSource.paginator = this.paginator;
      }
    ),

    (error: Error) => {
      console.log(error.name+' '+error.message)
    }
  }

  public openDialog(flag: number, idMesecni?: number, prodaja?:number, objekat?:number, artikl?:number, datum1?:number,datum2?:number) :void {

    const dialogRef = this.dialog.open (MesecniDialogComponent, {data: {idMesecni,prodaja, objekat, artikl,datum1,datum2}});
    dialogRef.componentInstance.flag = flag; 
    dialogRef.afterClosed().subscribe(res => {
      if(res==1)
      {
        this.loadData(); 
      }
    })
  }

  applyFilter(filterValue : string) {

    filterValue = filterValue.trim(); 
    //trimuju se spejsovi 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }




}
