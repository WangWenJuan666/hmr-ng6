import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from './../ticket.service';
import { TicketDetail } from './ticket-detail-data';
// import {environment} from '../../../../environments/environment';
import {NzMessageService, NzModalService, UploadFile} from 'ng-zorro-antd';
// import {CacheService} from '../../../shared/service/cache.service';
@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private msg: NzMessageService,
    private modalService: NzModalService,
    // private cacheService: CacheService,
  ) { }
  public ticketId = '';
  public entryPathName = '';
  public authority: any = '';
  public seeObj = {};
  public files: Array<any> = [];
  public emails = [];
  // public host = environment.host;
  public current: number;

  uploadUrl: string;
  content = '';
  uploading = false;
  fileNameList: Array<any> = [];
  fileList: Array<any> = [];
  chatList: Array<any> = [];
  ngOnInit() {
    // this.uploadUrl = this.host + '/ns/ticket/ticketFileUpload';
    this.ticketId = this.activatedRoute.snapshot.paramMap.get('ticketId');
    this.entryPathName = this.activatedRoute.snapshot.paramMap.get('name');
    this.ticketDetail();
    this.getChatList();
    // this.authority = this.cacheService.get('neo4j-admin', 'authority');
  }

  // 工单详情接口
  ticketDetail() {
    const res = TicketDetail.ticketDetail;
    // this.ticketService.ticketDetail(this.ticketId)
    //   .subscribe(res => {
        if (res.retCode === 1) {
          this.seeObj = res.result;
          if (this.seeObj['emails']) {
            this.emails = this.seeObj['emails'].split(';');
          } else {
            this.emails = [];
          }
          this.current = res.result.status;
          console.log(this.current);
        }
        if (res.result.attchments.length > 0) {
          this.files = res.result.attchments;
        }
    //   });
  }

  getFile(fileName) {
    // const token = JSON.parse(window.localStorage.getItem('neo4j-admin'))['token'];
    // window.location.href = this.host + '/ns/ticket/ticketFileDownload?fileName=' + fileName + '&token=' + token;
  }

  goBack(): void {
    this.location.back();
  }

  // 受理工单
  getDown() {
    // this.ticketService.getDown(this.ticketId)
    //   .subscribe(res => {
    //     if (res.retCode === 1) {
    //       this.current = 1;
    //       this.modalService.success({
    //         nzTitle: '成功',
    //         nzContent: res.retMsg
    //       });
    //     } else {
    //       this.modalService.error({
    //         nzTitle: '失败',
    //         nzContent: res.retMsg
    //       });
    //     }

    //   });
  }

  // 结束工单
  shutdown() {
    // this.ticketService.shutdown(this.ticketId)
    //   .subscribe(res => {
    //     if (res.retCode === 1) {
    //       this.current = 2;
    //       this.modalService.success({
    //         nzTitle: '成功',
    //         nzContent: res.retMsg
    //       });
    //     } else {
    //       this.modalService.error({
    //         nzTitle: '失败',
    //         nzContent: res.retMsg
    //       });
    //     }

    //   });
  }


  // 会话列表
  getChatList() {
    const res = TicketDetail.chatList;
    // this.ticketService.getChatList(this.ticketId).subscribe(res => {
      if (res.retCode === 1) {
        this.chatList = res.result;
      } else {

      }
    // });
  }


  // 设置上传文件的请求头
  setHeader = (file: UploadFile): any => {
  //   return { token: this.cacheService.get('neo4j-client', 'token') || '' };
  // };

  // // 文件上传校验文件大小
  // sizeLimit = (file: UploadFile, fileList: UploadFile[]): boolean => {
  //   if (file.size > 5120000) {
  //     this.modalService.error({
  //       nzTitle: '失败',
  //       nzContent: `${file.name} 文件大于5M`
  //     });
  //     return false;
  //   } else {
  //     return true;
  //   }
  };

  // 可以检测文件上传的过程
  handleChange({ file, fileList }: { [key: string]: any }): void {
    // const status = file.status;
    // if (status === 'uploading') {
    //   this.uploading = true;
    // }
    // if (status === 'done') {
    //   this.msg.success(`${file.name} 文件上传成功。`);
    //   // 存储上传成功的文件的后端返回值fileId
    //   this.fileNameList = [];
    //   this.uploading = false;
    //   if (fileList.length > 0) {
    //     for (const item of fileList) {
    //       if (item.response.retCode === 1) {
    //         this.fileNameList.push(item.response.result.fileId);
    //       }
    //     }
    //   }
    // } else if (status === 'error') {
    //   this.uploading = false;
    //   this.modalService.error({
    //     nzTitle: '失败',
    //     nzContent: `${file.name} 文件上传失败。`
    //   });
    // }
  }

  // 删除文件时进行的操作
  removeFile = (file: UploadFile): boolean => {
  //   let fileName = '';
  //   if (file.response) {
  //     fileName = file.response.result.fileId;
  //   } else {
  //     fileName = file.name;
  //   }
  //   // 删除文件时 需将fileNameList对应的文件名删除
  //   this.fileNameList.splice(
  //     this.fileNameList.findIndex(item => item === fileName),
  //     1
  //   );
  //   this.ticketFileDelete(fileName);
    return true;
  // };

  // // 删除已上传的文件时向后端发送请求
  // ticketFileDelete(fileName): void {
  //   this.ticketService.ticketFileDelete(fileName).subscribe(res => {
  //     if (res.retCode === 1) {
  //     } else {
  //     }
  //   });
  }


// 提交msg
  addMsg(fileName): void {
    // if (this.content.length >= 1000) {
    //   this.modalService.error({
    //     nzTitle: '失败',
    //     nzContent: '请将回复的字限制在1000字以内'
    //   });
    //   return ;
    // }
    // this.ticketService.addMsg(this.ticketId, this.content, this.fileNameList).subscribe(res => {
    //   if (res.retCode === 1) {
    //     this.fileNameList = [];
    //     this.fileList = [];
    //     this.content = '';
    //     this.getChatList();
    //   } else {
    //     this.modalService.error({
    //       nzTitle: '失败',
    //       nzContent: res.retMsg
    //     });
    //   }
    // });
  }

}
