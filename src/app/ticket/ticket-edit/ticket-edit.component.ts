import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { TicketEdit } from './ticket-detail.data';
import {NzMessageService, NzModalService, UploadFile} from 'ng-zorro-antd';
import {Location} from '@angular/common';
import {CacheService} from '../../shared/service/cache.service';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {
  validateForm: FormGroup;
  emails: Array<any> = [];
  ticketId = '';
  fileNameList: Array<any> = [];
  uploadUrl: string;
  uploading = false;
  host: string = environment.host;
  failureLevelArr = [
    {key: 4, value: '四级故障（服务器未受到影响）'},
    {key: 3, value: '三级故障（服务器已受到影响）'},
    {key: 2, value: '二级故障（已影响到其他生产服务）'},
    {key: 1, value: '一级故障（生产服务已完全终止）'},
  ];

  versionArr = [
    {key: 1, value: '3.3(发布日期：2017年10月23日，支持截止日期至：2019年4月23日)'},
    {key: 2, value: '3.4(发布日期：2018年5月17日，支持截止日期至：2019年11月17日)'},
    {key: 3, value: '3.5(发布日期：2018年11月29日，支持截止日期至：2020年5月28日)'}
  ];
  // 发布版本
  realseVersionArr = [
    {key: 1, value: '企业版'},
    {key: 2, value: '社区版'},
    {key: 3, value: '高级版'}
  ];
  // 部署模式
  depPatternArr = [
    {key: 1, value: '服务器（默认）'},
    {key: 2, value: '嵌入式（通过Java程序）'},
  ];
  questionTypePlaceholder = '请简述需要有关Neo4j的信息、改进或文档内容';
  // 问题类型
  problemTypeArr: Array<any> = [];
  // 文件默认数组
  defaultFileList: Array<any> = [];
  fileList: Array<any> = [...this.defaultFileList];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private msg: NzMessageService,
    private modalService: NzModalService,
    private cache: CacheService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.ticketId = this.activatedRoute.snapshot.paramMap.get('ticketId');
    // this.uploadUrl = this.host + '/ns/ticket/ticketFileUpload';
    this.validateForm = this.fb.group({
      phone: [{value: null, disabled: true}],
      content: [{value: null, disabled: true}],
      description: [{value: null, disabled: true}],
      level: [{value: null, disabled: true}],
      nver: [{value: null, disabled: true}],
      realseVer: [{value: null, disabled: true}],
      InsCount: [{value: null, disabled: true}],
      depPattern: [{value: null, disabled: true}],
      problemType: [{value: null, disabled: true}]
    });
    this.ticketDetail();
  }

  // 工单详情接口
  ticketDetail() {
    // this.clientService.ticketDetail(this.ticketId)
      // .subscribe(res => {
        const res = TicketEdit.ticketDetail
        if (res.retCode === 1) {
          const seeObj = res.result;
          if (seeObj['emails']) {
            this.emails = seeObj['emails'].split(';');
          } else {
            this.emails = [];
          }
          console.log(this.validateForm, 'this.validateForm');
          this.validateForm.patchValue({'phone': seeObj['phone']});
          this.validateForm.patchValue({'content': seeObj['content']});
          this.validateForm.patchValue({'description': seeObj['description']});
          this.validateForm.patchValue({'level': seeObj['level']});
          if (seeObj['level'] === 1) {
            this.problemTypeArr = [
              {key: 1, value: '数据损坏'},
              {key: 2, value: '系统无法远程连接'},
              {key: 3, value: '系统无法进行操作'},
              {key: 4, value: '文档中罗列的重要功能不可用'},
              {key: 5, value: '系统无限期宕机，导致资源或响应无法接受或无限期延迟'},
              {key: 6, value: '系统崩溃，并在重新启动尝试后重复崩溃'},
              {key: 7, value: '关键数据丢失，无法恢复'},
              {key: 8, value: '导致大面积的实时业务中断'},
              {key: 9, value: '暂无修复方案的 Bug'},
            ];
          } else if (seeObj['level'] === 2) {
            this.problemTypeArr = [
              {key: 1, value: '已知有修复方案的Bug'},
              {key: 2, value: '第三方应用导致的故障'},
              {key: 3, value: 'GC引起的故障'}
            ];
          } else if (seeObj['level'] === 3) {
            this.problemTypeArr = [
              {key: 1, value: '应用开发指导，譬如 Cypher 语句优化指导'},
              {key: 2, value: '功能改进'},
              {key: 3, value: '运维管理相关的故障，譬如生成新账户'}
            ];
          } else {
            this.validateForm.patchValue({'problemType': null});
          }
          this.validateForm.patchValue({'nver': seeObj['nver']});
          this.validateForm.patchValue({'realseVer': seeObj['realseVer']});
          this.validateForm.patchValue({'InsCount': seeObj['instancesCount']});
          this.validateForm.patchValue({'depPattern': seeObj['depPattern']});
          this.validateForm.patchValue({'problemType': seeObj['problemType']});
          // 展示已上传的文件
          const fileNameList = seeObj['attchments'];
          if (fileNameList.length > 0) {
            fileNameList.forEach( ( item, i ) => {
              this.defaultFileList.push({status: 'done', name: item, uid: i}); // 必须需要uid否则逐个删除时会全部删除
              this.fileNameList.push(item);
            } );
          }
          this.fileList = [...this.defaultFileList];
        }
      // });
  }

  submitForm(): void {
    this.ticketEdit(this.fileNameList);
  }
// 删除文件时进行的操作
removeFile = (file: UploadFile): boolean => {
  let fileName = '';
  if (file.response) {
    fileName = file.response.result.fileId;
  } else {
    fileName = file.name;
  }
  // 删除文件时 需将fileNameList对应的文件名删除
  const index = this.fileNameList.findIndex(function (item) {
    return item === fileName;
  });
  this.fileNameList.splice(index, 1);
  this.fileList.splice(index, 1);
  this.ticketFileDel(fileName);
  return true;
}

// 删除已上传的文件时向后端发送请求
ticketFileDel(fileName): void {
  // this.clientService.ticketFileDel(this.ticketId, fileName)
    // .subscribe(res => {
      // if (res.retCode === 1) {

      // } else {

      // }
    // });
}

// 可以检测文件上传的过程
handleChange({file, fileList}: { [key: string]: any }): void {
  const status = file.status;
  if (status === 'uploading') {
    this.uploading = true;
  }
  if (status === 'done') {
    this.uploading = false;
    this.msg.success(`${file.name} 文件上传成功。`);
    // 存储上传成功的文件的后端返回值fileId
    this.fileNameList = [];
    if (fileList.length > 0) {
      for (const item of fileList) {
        // 判断两种情况，一种为编辑前上传的文件，另一种为编辑中上传的文件
        if (item.response) {
          if (item.response.retCode === 1) {
            this.fileNameList.push(item.response.result.fileId);
          }
        } else {
          this.fileNameList.push(item.name);
        }

      }
    }
  } else if (status === 'error') {
    this.uploading = false;
    this.modalService.error({
      nzTitle: '失败',
      nzContent: `${file.name} 文件上传失败。`
    });
  }
}

// 设置上传文件的请求头
setHeader = (file: UploadFile): any => {
  return {'token': this.cache.get('myToken', 'token') || ''};
}

// 文件上传钱进行校验文件大小
sizeLimit = (file: UploadFile, fileList: UploadFile[]): boolean => {
  if (file.size > 5120000) {
    this.modalService.error({
      nzTitle: '失败',
      nzContent: `${file.name} 文件太大`
    });
    return false;
  } else {
    return true;
  }
}

  ticketEdit(files) {
    const res = TicketEdit.ticketEdit
    // this.clientService.ticketEdit(this.ticketId, files)
      // .subscribe(res => {
        if (res.retCode === 1) {
          this.modalService.success({
            nzTitle: '成功',
            nzContent: res.retMsg
          });
          this.goBack();
        } else {
          this.modalService.error({
            nzTitle: '失败',
            nzContent: res.retMsg
          })
        }
      // });
  }

  goBack(): void {
    this.location.back();
  }
  /**
   * 响应式表单提供了一种模型驱动的方式来处理表单输入，其中的值会随时间而变化，
   */

}
