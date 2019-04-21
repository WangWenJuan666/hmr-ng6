import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrisisListComponent, HeroListComponent]
})
export class RouterModule { }
