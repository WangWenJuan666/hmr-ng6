import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive/reactive.component';
import {Routes, RouterModule} from '@angular/router';
import { TemplateComponent } from './template/template.component';
const routes: Routes = [
  // 默认路径
  {path: '', redirectTo: 'reactive', pathMatch: 'full'},
  {
    path: 'reactive',
    component: ReactiveComponent,
    // 路由守卫
    // canActivate: [AuthGuard],
  },
  {
    path: 'template',
    component: TemplateComponent,
    // 路由守卫
    // canActivate: [AuthGuard],
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
