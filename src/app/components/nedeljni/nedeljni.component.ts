import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Nedeljni } from 'src/app/models/nedeljni';
import {NedeljniService} from 'src/app/services/nedeljni.service';
import { NedeljniDialogComponent } from '../dialogs/nedeljni-dialog/nedeljni-dialog.component';

@Component({
  selector: 'app-nedeljni',
  templateUrl: './nedeljni.component.html',
  styleUrls: ['./nedeljni.component.css']
})
export class NedeljniComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  displayedColumns = ['idNedeljni', 'prodaja', 'objekat', 'artikl','datum1','datum2', 'actions'];
  dataSource: MatTableDataSource<Nedeljni>;


//komunikacija izmedju html i ts
@ViewChild(MatSort, {static : false}) sort :MatSort; 
@ViewChild(MatPaginator, {static : false}) paginator : MatPaginator;

  constructor(private nedeljniService : NedeljniService,
    private dialog: MatDialog) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData(); 

  }

  public loadData() {
    this.subscription = this.nedeljniService.getAllNedeljni().subscribe(
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

  public openDialog(flag: number, idNedeljni?: number, prodaja?:number, objekat?:number, artikl?:number, datum1?:number, datum2?:number) :void {

    const dialogRef = this.dialog.open (NedeljniDialogComponent, {data: {idNedeljni,prodaja, objekat, artikl,datum1,datum2}});
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
