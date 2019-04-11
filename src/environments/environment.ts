// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // host: 'http://192.168.0.36:8080/', // 客户端-唐清伟
  host: 'http://192.168.0.191:8080/', // 客户端-测试
  // host: 'http://192.168.0.57:8080/', // 客户端-张
  // host: 'http://52.184.37.2:8080/', // 生产
  // host: 'http://127.0.0.1:4201/backend'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
