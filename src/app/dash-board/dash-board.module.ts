import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DashBoardRoutingModule } from './dash-board-routing.module';
// ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [DashBoardComponent]
})
export class DashBoardModule { }
