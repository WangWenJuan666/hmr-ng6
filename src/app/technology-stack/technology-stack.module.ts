import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyStackRoutingModule } from './technology-stack-routing.module';
import { Es6IteratorAndForOfComponent } from './es6-iterator-and-for-of/es6-iterator-and-for-of.component';


@NgModule({
    imports: [
        CommonModule,
        TechnologyStackRoutingModule,
    ],
    declarations: [
        Es6IteratorAndForOfComponent,
    ]
})
export class TechnologyStackModule { }
