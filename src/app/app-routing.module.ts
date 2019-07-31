import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'

// 导入守卫服务
import { AuthGuard } from './shared/guard/auth.guard'
const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    // 路由守卫
    canActivate: [AuthGuard],

    // 子路由
    children: [
      // { path: 'dashBoard', component : DashBoardComponent},
      // dashBoard
      {
        path: 'dashBoard',
        loadChildren: './dash-board/dash-board.module#DashBoardModule',
        canActivate: [AuthGuard],
        // canLoad:守卫（在加载特性模块之前进行检查）
      },
      {
        path: 'employee',
        loadChildren: './employees/employees.module#EmployeesModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'ticket',
        loadChildren: './ticket/ticket.module#TicketModule',
        canActivate: [AuthGuard]
      },
      // forms
      {
        path: 'forms',
        loadChildren: './forms/forms.module#FormModule',
        canActivate: [AuthGuard]
      },
      // 技术栈
      {
        path: 'tech',
        loadChildren: './technology-stack/technology-stack.module#TechnologyStackModule',
        // canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
  // // 异步加载的路由，实际上加载的是模块
  // {
  //   path: 'employee',
  //   // 要将异步加载模块的路径以及模块名称配置在此处
  //   // 语法： 异步加载模块的路径#模块名称
  //   loadChildren: './employees/employees.module#EmployeesModule'
  // }
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
