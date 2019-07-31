import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
// import { IdentityRevealedValidatorDirective } from './../shared/directive/forbidden-name.directive';
// TemplateComponent
// import { BrowserModule } from '@angular/platform-browser';
// 因为模板驱动的表单位于它们自己的模块，所以在使用表单之前，需要将 FormsModule 添加到应用模块的 imports 数组中。
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsRoutingModule,
    // BrowserModule,
    FormsModule// 把 FormsModule 添加到 ngModule 装饰器的 imports 列表中，这样应用就能访问模板驱动表单的所有特性，包括 ngModel。
  ],
  declarations: [ReactiveComponent, TemplateComponent,
    // IdentityRevealedValidatorDirective
  ]
})
export class FormModule { }

