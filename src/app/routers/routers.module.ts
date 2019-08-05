import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutersRoutingModule } from './routers-routing.module';
import { RoutersComponent } from './routers.component'
import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroesModule } from './heroes/heroes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
    imports: [
        CommonModule,
        RoutersRoutingModule,
        // HeroesModule
    ],
    declarations: [
        RoutersComponent,
        CrisisListComponent,
        PageNotFoundComponent,
    ]
})

export class RoutersModule { }
