import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './/app-routing.module'

import { AuthInterceptors } from './shared/http-interceptors/auth.interceptor';

// ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';

// pipe
import { PipeModule } from './shared/pipe/pipe.module';
import { LimitdigitsDirective } from './shared/directive/limitdigits.directive';

// 公共组件模块
import { TechnologyStackModule } from './technology-stack/technology-stack.module'

import { IdentityRevealedValidatorDirective } from './shared/directive/forbidden-name.directive';
import { CacheService } from './shared/service/cache.service';
registerLocaleData(zh)

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, LimitdigitsDirective,IdentityRevealedValidatorDirective ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    PipeModule,
    TechnologyStackModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptors,
      multi: true
    }, CacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
