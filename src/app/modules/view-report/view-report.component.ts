import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ReportData } from 'src/app/models/models';
import { AddReportComponent } from '../add-report/add-report.component';
//import { NgxPrinterService } from 'ngx-printer'; 

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent {

  searchText:any;
  filePath!: string;

  // data: any[];
  columns = ['index','date_entry', 'title', 'type_beneficiary', 'count_male', 'count_female', 'total',
             'poor_rate', 'fair_rate', 'satisfactory_rate', 'verysatisfactory_rate', 'excellent_rate',
             'duration', 'serviceOpt', 'partners', 'fac_staff', 'role', 'cost_fund', '_file', 'actions'];
             

  // Declare the data source
  data = new MatTableDataSource<Data>();

   // Declare the paginator and sort
   @ViewChild('paginator') paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
   //directives!: [NgxPrintDirective]

  constructor( public _api: ApiService,
              public router: ActivatedRoute,
              public _fb: FormBuilder,
              public _dialog: MatDialog){
    
  }
  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
    this.data.sort =this.sort
    
  }
  ngOnInit(): void {
    this.adminview();


  }

  adminview(){
    this._api.viewReport()
    .subscribe(
      (response: any) => {
        this._api.reportData = response;
        console.log(response);
        this.data.data=response;
        console.log(this.data);

      }
    );
  }

  delete(id:number){
    console.log(id);
     this._api.deleteReport(id).subscribe(data=>{
        this.data.data = this.data.data.filter((u: any) => u !== data);
        console.log(this.data);
     })

     window.location.reload();
  }

  print() {
    // Call the print method
    window.print();
  }

  addReportDialog(){
    const user_id = 1;

    const _dialogRef = this._dialog.open(AddReportComponent);

    console.log(_dialogRef);
    
  }

  

}
