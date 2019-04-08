import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DashBoardRoutingModule } from './dash-board-routing.module';
// ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    NgxEchartsModule
  ],
  declarations: [DashBoardComponent]
})
export class DashBoardModule { }
