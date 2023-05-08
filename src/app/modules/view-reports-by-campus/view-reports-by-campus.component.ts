import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { IndicatorsList } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-reports-by-campus',
  templateUrl: './view-reports-by-campus.component.html',
  styleUrls: ['./view-reports-by-campus.component.scss']
})
export class ViewReportsByCampusComponent {

  searchText:any;
  indicators!:IndicatorsList[];

  defaultValues: string[] =[];
  columns = ['particulars', 'CAAD', 'CAS', 'COBE', 'COE', 'COED', 'COT', 'GS',
             'BURAUEN', 'CARIGARA', 'DULAG', 'ORMOC', 'TANAUAN'];

  // Declare the data source
  data = new MatTableDataSource<Data>();

  constructor(private _api:ApiService){}



  viewActualReport(){
    this._api.getIndicators().subscribe(
    (response: any) => {
      this.indicators = response;
      console.log(this.indicators)
      this.data.data = response;
      // console.log(response);
    })
  }

}
