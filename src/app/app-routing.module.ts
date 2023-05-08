import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './default/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ViewReportComponent } from './modules/view-report/view-report.component';
import { HomeComponent } from './modules/home/home.component';
import { ViewReportsByCampusComponent } from './modules/view-reports-by-campus/view-reports-by-campus.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"default", component:DefaultComponent,
    children:[
      {path:"home", component:HomeComponent},
      {path:"dashboard", component:DashboardComponent,
        children:[
          {path:'viewreports', component:ViewReportComponent},
          {path:'viewreports-by-campus', component:ViewReportsByCampusComponent}
        ]
      },
      //{path:"defa", redirectTo:"/default/dashboard", pathMatch:"full"}
    ],
  },
  
  {path:"", redirectTo:"/default/dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
