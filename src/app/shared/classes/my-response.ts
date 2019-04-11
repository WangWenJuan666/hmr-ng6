export class MyResponse {
  retCode: number; // 结果码
  retMsg: string;  // 结果说明
  result?: any;    // 详情
  constructor(obj: Object) {
    this.retCode = obj['retCode'];
    this.retMsg = obj['retMsg'];
    this.result = obj['result'];
  }
}
