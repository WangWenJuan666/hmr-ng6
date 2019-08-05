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
    //   {
    //     path: 'tech',
    //     loadChildren: './technology-stack/technology-stack.module#TechnologyStackModule',
    //     // canActivate: [AuthGuard]
    //   },
      // 路由
      {
        path: 'routers',
        loadChildren: './routers/routers.module#RoutersModule',
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
  imports: [CommonModule, RouterModule.forRoot(appRoutes,{ enableTracing: true })],
  //forRoot()  创建一个带有所有路由器服务提供商和指令的模块。它还可以（可选的）设置一个应用监听器，来执行首次导航。
//   static forRoot(routes: Route[], config?: ExtraOptions): ModuleWithProviders<RouterModule>
//   appRoutes[]
// config	ExtraOptions	可选. 默认值是 undefined.
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

//ExtraOptions 补充
// enableTracing 可以切换路由器是否应该把它所有的内部事件都记录到控制台中。

// useHash 启用 LocationStrategy 位置策略，用 URL 片段（#）代替 history API。

// initialNavigation 禁用首次导航。

// errorHandler 为那些失败的导航定义了一个自定义错误处理器。

// preloadingStrategy 配置预加载策略（参见 PreloadAllModules）。

// onSameUrlNavigation 定义了当路由器接收到一个到当前 URL 的导航请求时，应该做什么。

// scrollPositionRestoration 配置了当导航回来时是否需要还原滚动位置。

// anchorScrolling 配置了当 URL 指定了一个片段（fragment）时，路由器是否需要滚动到那个元素处。

// scrollOffset 配置了当滚动到某个元素时，路由应该使用的滚动偏移量。

// paramsInheritanceStrategy 定义了路由器要如何把父路由的参数、数据和解析出的数据合并到子路由中。

// malformedUriErrorHandler 定义了一个自定义的无效 uri 错误处理器函数。当 encodedURI 的参数中包含错误的字符序列时，就会调用这个处理器。

// urlUpdateStrategy 定义了路由器应该何时更新浏览器的 URL。默认的行为是在成功的导航之后才更新。

// relativeLinkResolution 指定了在空路径路由的组件中应该正确解析相对路径。
