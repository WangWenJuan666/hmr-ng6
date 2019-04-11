///<reference path='../../../../node_modules/@angular/common/src/pipes/date_pipe.d.ts'/>
import { Component, OnInit } from '@angular/core';
import { TicketListData } from './ticket-list-data';
import { DatePipe } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  providers: [DatePipe]
})
export class TicketListComponent implements OnInit {
  listOfData: any[] = [];
  pageNum = 1;
  pageSize = 10;
  total: number;
  // 故障等级
  public faiLevel: any = '';
  failureLevelArr = [
    { key: '', value: '所有故障等级' },
    { key: 1, value: '一级' },
    { key: 2, value: '二级' },
    { key: 3, value: '三级' },
    { key: 4, value: '四级' }
  ];
  public supportLevel = '';
  // 所有支持级别
  supportLevelArr = [
    { key: '', value: '所有支持级别' },
    { key: '1', value: '一线支持' },
    { key: '2', value: '二线支持' }
  ];
  public status = '';
  // 所有状态
  statusArr = [
    { key: '', value: '所有状态' },
    { key: '0', value: '待受理' },
    { key: '1', value: '已受理' },
    { key: '2', value: '已完成' }
  ];
  // 日期选择器
  startValue: Date | null = null;
  endValue: Date | null = null;
  endOpen = false;
  public startTimeStr = '';
  public endTimeStr = '';

  public content = '';
  public statistics: object = {};
  constructor(
    // private clientService: ClientService,
    private modalService: NzModalService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.ticketList();
    // 工单统计方法
    this.ticketStatistics();
  }

  ticketList() {
    if (this.content) {
      const patt1 = /(^[A-Za-z0-9\u4e00-\u9fa5]{0,32}$)/;
      const contentBoolean = patt1.test(this.content);
      if (!contentBoolean) {
        this.modalService.error({
          nzTitle: '失败',
          nzContent: '工单编号或问题标题请输入0-32位字符'
        });
        return;
      }
    }
    // this.clientService.ticketList(this.pageNum, this.pageSize, this.faiLevel, this.status, this.startTimeStr,
    // this.endTimeStr, this.content)
    // .subscribe(res => {
    const res = TicketListData.ticketList;
    if (res.retCode === 1) {
      this.listOfData = res.result.list;
      this.total = res.result.total;
    }
    // });
  }

  // 分页功能
  changePage(e) {
    this.pageNum = e;
    this.ticketList();
  }

  // 日期选择器
  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  }

  onStartChange(date: Date): void {
    this.startValue = date;
    this.startTimeStr = this.datePipe.transform(this.startValue, 'yyyy-MM-dd');
  }

  onEndChange(date: Date): void {
    this.endValue = date;
    this.endTimeStr = this.datePipe.transform(this.endValue, 'yyyy-MM-dd');
  }


  ticketStatistics() {
    // this.clientService.ticketStatistics().subscribe(res => {
      const res = TicketListData.ticketStatistics;
      if (res.retCode === 1) {
        this.statistics = res.result;
      }
    // });
  }
}
