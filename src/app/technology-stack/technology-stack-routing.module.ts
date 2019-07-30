import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Es6IteratorAndForOfComponent } from './es6-iterator-and-for-of/es6-iterator-and-for-of.component';
import { CrisisListComponent } from './router/crisis-list/crisis-list.component';
import { HeroListComponent } from './router/hero-list/hero-list.component';
import { PageNotFoundComponent } from './router/page-not-found/page-not-found.component';
import { HeroDeatilComponent } from './router/hero-deatil/hero-deatil.component';
const routes: Routes = [
    // 默认路径
    // { path: '', redirectTo: 'es6-string', pathMatch: '' },
    { path: 'iterator', component: Es6IteratorAndForOfComponent },
    // 路由
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'hero/:id', component: HeroDeatilComponent },
    {
        path: 'heroes',
        component: HeroListComponent,
        data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }

]
@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            { enableTracing: true } // <-- debugging purposes only
            ),
             // other imports here
    ],
    exports: [RouterModule]
})
export class TechnologyStackRoutingModule { }

