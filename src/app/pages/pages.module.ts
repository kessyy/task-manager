import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../components/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  providers: [], 
})
export class PagesModule { }
