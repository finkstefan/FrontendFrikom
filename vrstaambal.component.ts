import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Departman } from 'src/app/models/departman';
import { Status } from 'src/app/models/status';
import { VrstaAmbal } from 'src/app/models/vrstaambal';
import { StudentService } from 'src/app/services/student.service';
import { VrstaAmbalService } from 'src/app/services/vrstaambal.service';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';
import { VrstaAmbalDialogComponent } from '../dialogs/vrstaambal-dialog/vrstaambal-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './vrstaambal.component.html',
  styleUrls: ['./vrstaambal.component.css']
})
export class VrstaAmbalComponent implements OnInit, OnDestroy {

  displayedColumns = ["idVrstaAmbalaze","vrstaAmbalaze","actions"];
dataSource: MatTableDataSource<VrstaAmbal>;

subscription: Subscription;
@ViewChild(MatSort,{static: false}) sort: MatSort;
@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private vaService:VrstaAmbalService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

 

  ngOnDestroy(): void {
this.subscription.unsubscribe();
  }

public loadData(){
 this.subscription = this.vaService.getAllVrsteAmbal()
  .subscribe(data => {
   // console.log(data);
   this.dataSource = new MatTableDataSource(data);

   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
  }),
  (error: Error) => {
    console.log(error.name + ' ' + error.message);
  }
}



public openDialog(flag:number, idVrstaAmbalaze?:number, vrstaAmbalaze?:string){
const dialogRef = this.dialog.open(VrstaAmbalDialogComponent, {data: {idVrstaAmbalaze,vrstaAmbalaze}});
dialogRef.componentInstance.flag = flag;
dialogRef.afterClosed()
.subscribe(
  result => {
    if(result === 1){
      this.loadData();
    }
  }
)
}

applyFilter(filterValue: string){
  filterValue=filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSource.filter = filterValue;
}

}
