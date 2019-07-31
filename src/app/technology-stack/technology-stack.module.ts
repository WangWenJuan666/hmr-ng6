import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyStackRoutingModule } from './technology-stack-routing.module';
import { Es6IteratorAndForOfComponent } from './es6-iterator-and-for-of/es6-iterator-and-for-of.component';
import { CrisisListComponent } from './router/crisis-list/crisis-list.component';
import { HeroListComponent } from './router/hero-list/hero-list.component';
import { PageNotFoundComponent } from './router/page-not-found/page-not-found.component';
import { HeroDeatilComponent } from './router/hero-deatil/hero-deatil.component';

@NgModule({
    imports: [
        CommonModule,
        TechnologyStackRoutingModule
    ],
    declarations: [
        Es6IteratorAndForOfComponent,
        CrisisListComponent,
        HeroListComponent,
        PageNotFoundComponent,
        HeroDeatilComponent]
})
export class TechnologyStackModule { }
