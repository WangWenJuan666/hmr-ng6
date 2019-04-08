import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { Routes , RouterModule } from '@angular/router'
const routes: Routes = [
  {path: '', redirectTo: 'dash-board', pathMatch: 'full'},
  {path: 'dash-board', component: DashBoardComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
