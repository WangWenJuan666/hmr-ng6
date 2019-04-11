import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  constructor() {}

  get(key , innerkey?: string) {
    const itemString = window.localStorage.getItem(key);
    if (!itemString) return null;
    const itemObj = JSON.parse(itemString);
    if (!innerkey || !itemObj) return itemObj;
    return itemObj[innerkey] ? itemObj[innerkey] : itemObj;
  }
  set(key, itemObj: any) {
    const parse = itemObj => {
      if (!itemObj) return JSON.stringify({});
      if (typeof itemObj === 'object') {
        return JSON.stringify(itemObj);
      }
      return JSON.stringify({ data: itemObj });
    };

    return window.localStorage.setItem(key, parse(itemObj));
  }

  clear(key) {
    return window.localStorage.setItem(key, null);
  }
}
