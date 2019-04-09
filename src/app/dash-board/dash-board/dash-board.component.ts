import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { DashData } from './dash-data';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  public lineData = DashData.lineData;
  constructor() {}
  public problemTypeArr = [
    { key: 1, value: '数据损坏' },
    { key: 2, value: '系统无法远程连接' },
    { key: 3, value: '系统无法进行操作' },
    { key: 4, value: '文档中罗列的重要功能不可用' },
    { key: 5, value: '系统无限期宕机，导致资源或响应无法接受或无限期延迟' },
    { key: 6, value: '系统崩溃，并在重新启动尝试后重复崩溃' },
    { key: 7, value: '关键数据丢失，无法恢复' },
    { key: 8, value: '导致大面积的实时业务中断' },
    { key: 9, value: '暂无修复方案的 Bug' }
  ];

  dayArr = {
    series: [
      {
        name: '新工单',
        type: 'line',
        stack: '总量',
        // data: []
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '处理数',
        type: 'line',
        stack: '总量',
        // data: []
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      },
      {
        name: '完成数',
        type: 'line',
        stack: '总量',
        // data: []
        data: [220, 182, 154, 234, 290, 330, 310]
      }
    ],
    xAxis: []
  };
  monthArr = {
    series: [
      {
        name: '新工单',
        type: 'line',
        stack: '总量',
        // data: []
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      },
      {
        name: '处理数',
        type: 'line',
        stack: '总量',
        // data: []
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '完成数',
        type: 'line',
        stack: '总量',
        // data: [],
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
    xAxis: []
  };
  weekArr = {
    series: [
      {
        name: '新工单',
        type: 'line',
        stack: '总量',
        // data: []
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      },
      {
        name: '处理数',
        type: 'line',
        stack: '总量',
        // data: []
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      },
      {
        name: '完成数',
        type: 'line',
        stack: '总量',
        // data: []
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
    xAxis: []
  };

  // chartOption: EChartOption = {
  //   title: {
  //     text: '折线图堆叠'
  //   },
  //   tooltip: {
  //     trigger: 'axis'
  //   },
  //   legend: {
  //     data: ['新工单', '处理数', '完成数']
  //   },
  //   grid: {
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     containLabel: true
  //   },
  //   xAxis: {
  //     type: 'category',
  //     boundaryGap: false,
  //     data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  // //   series: [{
  // //     data: [820, 932, 901, 934, 1290, 1330, 1320],
  // //     type: 'line'
  // // }]
  // series: this.dayArr['series'],
  // }
  chartOption: EChartOption = {};
  echartsIntance: any;
  // 按钮颜色
  dayType = 'default'; // 按钮颜色
  weekType = 'default';
  monthType = 'default';

  ngOnInit() {
    this.lineChart();
  }

  // 数据方法
  lineChart() {
    const res = DashData.lineData;
    if (res.retCode === 1) {
      if (res.result.day) {
        const dayList = res.result.day;
        for (const item of dayList) {
          this.dayArr['xAxis'].push(item.submitTime);
          this.dayArr['series'][0].data.push(item.submit);
          this.dayArr['series'][1].data.push(item.start);
          this.dayArr['series'][2].data.push(item.complete);
        }
      }
      if (res.result.month) {
        const monthList = res.result.month;
        for (const item of monthList) {
          this.monthArr['xAxis'].push(item.submitTime);
          this.monthArr['series'][0].data.push(item.submit);
          this.monthArr['series'][1].data.push(item.start);
          this.monthArr['series'][2].data.push(item.complete);
        }
      }
      if (res.result.week) {
        const weekList = res.result.week;
        for (const item of weekList) {
          this.weekArr['xAxis'].push(item.submitTime);
          this.weekArr['series'][0].data.push(item.submit);
          this.weekArr['series'][1].data.push(item.start);
          this.weekArr['series'][2].data.push(item.complete);
        }
      }
      this.chartOption = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['新工单', '处理数', '完成数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.dayArr['xAxis']
        },
        yAxis: {
          type: 'value'
        },
        series: this.dayArr['series']
      };
      this.chartOption['xAxis']['data'] = this.dayArr['xAxis'];
      this.chartOption['series'] = this.dayArr['series'];
      this.dayType = 'primary';
      this.monthType = 'default';
      this.weekType = 'default';
    }
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }
  weekEvent() {
    this.chartOption['xAxis']['data'] = this.weekArr['xAxis'];
    this.chartOption['series'] = this.weekArr['series'];
    this.echartsIntance.setOption(this.chartOption, true);
    this.dayType = 'default';
    this.monthType = 'default';
    this.weekType = 'primary';
  }
  monthEvent() {
    this.chartOption['xAxis']['data'] = this.monthArr['xAxis'];
    this.chartOption['series'] = this.monthArr['series'];
    this.echartsIntance.setOption(this.chartOption, true);
    this.dayType = 'default';
    this.monthType = 'primary';
    this.weekType = 'default';
  }
  dayEvent() {
    this.chartOption['xAxis']['data'] = this.dayArr['xAxis'];
    this.chartOption['series'] = this.dayArr['series'];
    this.echartsIntance.setOption(this.chartOption, true);
    this.dayType = 'primary';
    this.monthType = 'default';
    this.weekType = 'default';
  }
}
