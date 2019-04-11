import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { PipeModule } from './../shared/pipe/pipe.module';
// antd
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
@NgModule({
  imports: [
    CommonModule,
    TicketRoutingModule,
    FormsModule,
    PipeModule,
    NgZorroAntdModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [TicketListComponent, TicketDetailComponent, TicketEditComponent]
})
export class TicketModule { }
