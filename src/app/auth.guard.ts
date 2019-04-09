import { Injectable } from '@angular/core'

// 导入路由服务实现跳转
// 导入路由服务实现跳转
import { Router } from '@angular/router';
import {ActivatedRouteSnapshot, CanActivate, NavigationError, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    // 获取token
    const token = localStorage.getItem('token')
    const url: string = state.url;
      window.sessionStorage.setItem('beforeUrl', url);
    if (!token) {
    //     if (url.indexOf('client') !== -1) {
    //       this.router.navigate(['./client']);
    //     } else {
    //       this.router.navigate(['./admin']);
    //     }
        console.log(url, 'url1');
        this.router.navigate(['/login'])
        return false;
    } else {
      console.log(url, 'url2');
        // this.router.navigate(['/login'])
      return true
    }

    // 获取token
    // const token = localStorage.getItem('token')
    // if (!!token) {
      // return true
    // }
    // 跳转到登录页 login页面
    // this.router.navigate(['/login'])
    // return false
  }
}
