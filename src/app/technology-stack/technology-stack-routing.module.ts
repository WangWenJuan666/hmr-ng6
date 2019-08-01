import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Es6IteratorAndForOfComponent } from './es6-iterator-and-for-of/es6-iterator-and-for-of.component';
//每个 Route 都会把一个 URL 的 path 映射到一个组件。 注意，path 不能以斜杠（/）开头。 路由器会为解析和构建最终的 URL，这样当你在应用的多个视图之间导航时，可以任意使用相对路径和绝对路径。
const routes: Routes = [
    // 默认路径
    // { path: '', redirectTo: 'es6-string', pathMatch: '' },
    { path: 'iterator', component: Es6IteratorAndForOfComponent },
    // 路由
    {
        path: 'routers',
        loadChildren: './routers/routers.module#RoutersModule'
    },
    {
        path: 'routers',
        redirectTo: 'routes',
        pathMatch: 'full'
    }
]
@NgModule({
    // imports: [
    //     RouterModule.forRoot(routes,
    //         { enableTracing: true } // <-- debugging purposes only
    //         // 如果你想要看到在导航的生命周期中发生过哪些事件，可以使用路由器默认配置中的 enableTracing 选项。它会把每个导航生命周期中的事件输出到浏览器的控制台。 这应该只用于调试。你只需要把 enableTracing: true 选项作为第二个参数传给 RouterModule.forRoot() 方法就可以了
    //         ),
    //          // other imports here


    // ],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TechnologyStackRoutingModule { }

// 路由的属性
//paramMap ：一个 Observable，其中包含一个由当前路由的必要参数和可选参数组成的map对象。用这个 map 可以获取来自同名参数的单一值或多重值。
//queryParamMap ：一个 Observable，其中包含一个对所有路由都有效的查询参数组成的map对象。 用这个 map 可以获取来自查询参数的单一值或多重值。
// fragment：一个适用于所有路由的 URL 的 fragment（片段）的 Observable。
// outlet：要把该路由渲染到的 RouterOutlet 的名字。对于无名路由，它的路由名是 primary，而不是空串。
// routeConfig：用于该路由的路由配置信息，其中包含原始路径。
// parent：当该路由是一个子路由时，表示该路由的父级 ActivatedRoute。
// firstChild：包含该路由的子路由列表中的第一个 ActivatedRoute。
// children：包含当前路由下所有已激活的子路由。
/* 有两个旧式属性仍然是有效的，但它们不如其替代品那样强力，建议不再用它们，它们还将在未来的 Angular 版本中废弃。
// params —— 一个 Observable 对象，其中包含当前路由的必要参数和可选参数。请改用 paramMap。
// queryParams —— 一个 Observable 对象，其中包含对所有路由都有效的查询参数。请改用 queryParamMap。*/


//路由的事件
//在每次导航中，Router 都会通过 Router.events 属性发布一些导航事件。这些事件的范围涵盖了从开始导航到结束导航之间的很多时间点。下表中列出了全部导航事件
// NavigationStart  本事件会在导航开始时触发。

// RouteConfigLoadStart	本事件会在 Router 惰性加载 某个路由配置之前触发。

// RouteConfigLoadEnd	本事件会在惰性加载了某个路由后触发。

// RoutesRecognized  本事件会在路由器解析完 URL，并识别出了相应的路由时触发

// GuardsCheckStart 本事件会在路由器开始 Guard 阶段之前触发。

// ChildActivationStart	本事件会在路由器开始激活路由的子路由时触发。

// ActivationStart	本事件会在路由器开始激活某个路由时触发。

// GuardsCheckEnd	本事件会在路由器成功完成了 Guard 阶段时触发。

// ResolveStart	本事件会在 Router 开始解析（Resolve）阶段时触发。
// ResolveEnd 本事件会在路由器成功完成了路由的解析（Resolve）阶段时触发。
// ChildActivationEnd	本事件会在路由器激活了路由的子路由时触发。
// ActivationEnd	本事件会在路由器激活了某个路由时触发。
// NavigationEnd 本事件会在导航成功结束之后触发。
// NavigationCancel 本事件会在导航被取消之后触发。 这可能是因为在导航期间某个路由守卫返回了 false。
// NavigationError 这个事件会在导航由于意料之外的错误而失败时触发。
// Scroll	本事件代表一个滚动事件。


//forChild() 
//创建一个具有所有路由器指令和一个用于注册路由的提供商。
//static forChild(routes: Route[]): ModuleWithProviders<RouterModule>

// RouterLink让你可以在应用中链接到特定的路由。

//  RouterLinkActive当此链接指向的路由激活时，往宿主元素上添加一个 CSS 类。

//  RouterLinkWithHref允许你在应用中链接到特定的路由。

//  RouterOutlet一个占位符，Angular 会根据当前的路由器状态动态填充它。



