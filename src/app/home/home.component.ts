import { Component, OnInit } from '@angular/core';

// 导入服务
import { HomeService } from './home.service';
// 导入路由服务
import { Router } from '@angular/router';
// 导入antd服务
import { NzMessageService } from 'ng-zorro-antd';
import {CacheService} from '../shared/service/cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private router: Router,
    private nzMsgService: NzMessageService,
    private cacheService: CacheService
  ) {}

  isCollapsed = false;
  public username = '';

  // 退出
  logout() {
    // this.homeService.logout().subscribe(
    // res => {
    // console.log('退出成功了', res)
    // 先清除本地的token
    window.localStorage.setItem('myToken', null);
    window.sessionStorage.removeItem('beforeurl');
    // 再跳转到登录页
    this.router.navigate(['/login']);
    // },
    // err => {
    // console.log('退出失败，出错了：', err)
    // this.nzMsgService.create('warning', '好像出错了~ 请稍候再试')
    // }
    // )
  }

  ngOnInit() {
    this.username = this.cacheService.get('myToken', 'username');
  }
}
