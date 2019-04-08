import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() { }
  dayArr = {
    series : [
      {
        name: '新工单',
        type: 'line',
        stack: '总量',
        data: []
      },
      {
        name: '处理数',
        type: 'line',
        stack: '总量',
        data: []
      },
      {
        name: '完成数',
        type: 'line',
        stack: '总量',
        data: []
      }
    ],
    xAxis: []
  };
  monthArr = {
    series : [
      {
        name: '新工单',
        type: 'line',
        stack: '总量',
        data: []
      },
      {
        name: '处理数',
        type: 'line',
        stack: '总量',
        data: []
      },
      {
        name: '完成数',
        type: 'line',
        stack: '总量',
        data: []
      }
    ],
    xAxis: []
  };
  weekArr = {
    series : [
      {
        name: '新工单',
        type: 'line',
        stack: '总量',
        data: []
      },
      {
        name: '处理数',
        type: 'line',
        stack: '总量',
        data: []
      },
      {
        name: '完成数',
        type: 'line',
        stack: '总量',
        data: []
      }
    ],
    xAxis: []
  };
  chartOption: EChartOption = {};
  ngOnInit() {
    // this.lineChart();
  }

}
