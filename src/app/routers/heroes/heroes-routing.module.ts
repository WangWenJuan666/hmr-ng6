import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
    { path: '', redirectTo: './superheroes', pathMatch: 'full' },
    { path: 'hero/:id', redirectTo: '/superhero/:id' },
    { path: './superheroes', component: HeroListComponent },
    { path: './hero/:id', component: HeroDetailComponent },
    { path: '**', component: HeroListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroesRoutingModule { }
