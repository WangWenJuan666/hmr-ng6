import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { CacheService } from './cache.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyResponse } from '../classes/my-response';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Injectable()
export class HttpService {

  public host: string = environment.host;
  constructor(
    private http: HttpClient,
    private cache: CacheService,
    private router: Router,
  ) {
  }

  static extractData(res: Response) {
    // 204：响应报文中包含若干首部和一个状态行，但是没有实体的主体内容
    if (res.status != 204) return res.json() || {};
    return {};
  }


  public makeUrl(uri: string): string {
    return this.host + uri;
  }


  private parseURlEncoded(obj: any): string {
    let query = '',
      name, value, fullSubName, subName, subValue, innerObj, i;
    for (name in obj) {
      value = obj[name];
      if ( value === '' || undefined ) {
        continue ;
      }
      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name;
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += this.parseURlEncoded(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += this.parseURlEncoded(innerObj) + '&';
        }
      } else if (value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  };


  public get(uri: string): Observable<MyResponse> {
    let token = '';
    const url = this.router.url;
    // if (url.indexOf('client') !== -1 && this.cache.get('neo4j-client', 'token')) {
    //   token = this.cache.get('neo4j-client', 'token');
    // } else if (url.indexOf('admin') !== -1 && this.cache.get('neo4j-admin', 'token')) {
    //   token = this.cache.get('neo4j-admin', 'token');
    // }

    token = this.cache.get('myToken', 'token');
    return this.http
      .get(this.host + uri, {
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json',
          'token': token
        })
      })
      .map(resp => new MyResponse(resp));
  }



  public post(uri: string, body: any): Observable<MyResponse> {
    let token = '';
    const url = this.router.url;
    if (url.indexOf('client') !== -1 && this.cache.get('neo4j-client', 'token')) {
      token = this.cache.get('neo4j-client', 'token');
    } else if (url.indexOf('admin') !== -1 && this.cache.get('neo4j-admin', 'token')) {
      token = this.cache.get('neo4j-admin', 'token');
    }
    const parsedBody = this.parseURlEncoded(body);
    return this.http
      .post(this.host + uri, parsedBody, {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'token': token
        })
      })
      .map(resp => new MyResponse(resp));
  }

}
