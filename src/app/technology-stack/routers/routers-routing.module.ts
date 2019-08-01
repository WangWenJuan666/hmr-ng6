import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { RoutersComponent } from './routers/routers.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HeroDeatilComponent } from './hero-deatil/hero-deatil.component';
const routes: Routes = [
    // 默认路径
    // { path: 'crisis-center', component: CrisisListComponent },
      {
        path: '',
        // redirectTo: 'routes',
        component: RoutersComponent,
        children:[
            
            { path: 'crisis-center', component: CrisisListComponent },
            { path: '',   redirectTo: 'superheroes', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ]
        //   pathMatch: 'full'
      //   data: { title: 'Heroes List' }// 一个 Observable，其中包含提供给路由的 data 对象。也包含由解析守卫（resolve guard）解析而来的值。
        //第三个路由中的 data 属性用来存放于每个具体路由有关的任意信息。该数据可以被任何一个激活路由访问，并能用来保存诸如 页标题、面包屑以及其它静态只读数据
    },
      { path: '**', component: PageNotFoundComponent }
  ]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RoutersRoutingModule { }
