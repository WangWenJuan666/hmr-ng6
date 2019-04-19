import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { NoticeAddComponent } from './notice-add/notice-add.component';
import { NoticeEditComponent } from './notice-edit/notice-edit.component';

// UEditorModule
import {UEditorModule} from 'ngx-ueditor';

@NgModule({
  imports: [
    CommonModule,
    UEditorModule.forRoot({
      js: [
        `./assets/ueditor/ueditor.config.js`,
        `./assets/ueditor/ueditor.all.js`,
      ],
      // 默认前端配置项
      options: {
        UEDITOR_HOME_URL: './assets/ueditor/'
      }
    })
  ],
  declarations: [NoticeListComponent, NoticeAddComponent, NoticeEditComponent]
})
export class NoticeModule { }
