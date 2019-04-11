import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
const routes: Routes = [
  // 默认路径
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: 'list',
    component: TicketListComponent,
    // 路由守卫
    // canActivate: [AuthGuard],
  },
  {
    path: 'detail/:ticketId',
    component: TicketDetailComponent,
    // 路由守卫
    // canActivate: [AuthGuard],
  },
  {
    path: 'edit/:ticketId',
    component: TicketEditComponent,
    // 路由守卫
    // canActivate: [AuthGuard],
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
