import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NzMessageService, NzModalService, UploadFile } from 'ng-zorro-antd';
import { Location } from '@angular/common';

import { EmployeesService } from '../employees.service'

import { Router } from '@angular/router'

import { environment } from '../../../environments/environment';

// import { CacheService } from '../../shared/service/cache.service';

// 手机号码的正则
const PHONE_NUMBER_REGEXP = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  validateForm: FormGroup;
  // 问题类型
  questionTypePlaceholder = '请选择问题类型';
  questionTypeDisabled = false;
  problemTypeArr = [];
  failureLevelArr = [
    { key: 4, value: '四级故障（服务器未受到影响）' },
    { key: 3, value: '三级故障（服务器已受到影响）' },
    { key: 2, value: '二级故障（已影响到其他生产服务）' },
    { key: 1, value: '一级故障（生产服务已完全终止）' }
  ];
  host: string = environment.host;
  uploadUrl: string;
  constructor(
    private fb: FormBuilder,
    private employeesService: EmployeesService,
    private nzMsgService: NzMessageService,
    private router: Router
  ) {}

  employeeAddForm: FormGroup

  ngOnInit() {
    this.uploadUrl = this.host + '/ns/ticket/ticketFileUpload';
    const problemTypeValidator = (
      control: FormControl
    ): { [s: string]: boolean } => {
      if (this.validateForm) {
        if (
          this.validateForm.getRawValue().level !== 4 &&
          control.value === null
        ) {
          return { required: true, error: true };
        }
      }
    };
    this.validateForm = this.fb.group({
      // 注意：如果有两个及其以上的验证规则，需要使用 [] 来包裹
      // name: ['', [Validators.required, Validators.minLength(2)]],
      // gender: ['0', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // phoneNumber: ['', Validators.pattern(PHONE_NUMBER_REGEXP)],
      level: [null, [Validators.required]],
      // nver: [null, [Validators.required]],
      problemType: [null, [problemTypeValidator]]
      // joinDate: ['', this.joinDateValidate]
    })
  }

  // // 日期的自定义校验规则
  // joinDateValidate(control: FormControl) {
  //   const selectDate = +control.value
  //   // console.log(selectDate)
  //   const curDate = +new Date()

  //   if (selectDate > curDate) {
  //     return { date: true }
  //   }

  //   return null
  // }

  // submitForm = $event => {
  //   $event.preventDefault()
  //   const employeeAddForm = this.employeeAddForm
  //   const { controls } = employeeAddForm

  //   Object.keys(controls).forEach(key => {
  //     controls[key].markAsDirty()
  //     controls[key].updateValueAndValidity()
  //   })

  //   if (!employeeAddForm.valid) {
  //     return
  //   }

  //   // 发起请求，添加员工
  //   let { joinDate } = employeeAddForm.value
  //   if (!joinDate) {
  //     // 初始化默认日期
  //     joinDate = +new Date()
  //   }
  //   const params = { ...employeeAddForm.value, joinDate: joinDate - 0 }
  //   // console.log(params)
  //   this.employeesService.addEmployee(params).subscribe(res => {
  //     // console.log(res)
  //     this.nzMsgService.create('success', '添加员工成功')
  //     this.resetEmployee()
  //     this.router.navigate(['/home/employee'])
  //   })
  // }

  // resetEmployee() {
  //   const employeeAddForm = this.employeeAddForm
  //   const { controls } = employeeAddForm

  //   this.employeeAddForm.reset({
  //     gender: '0'
  //   })
  //   Object.keys(controls).forEach(key => {
  //     controls[key].markAsPristine()
  //     controls[key].updateValueAndValidity()
  //   })
  // }

  // resetForm(e: MouseEvent): void {
  //   e.preventDefault()
  //   this.resetEmployee()
  // }

  // 故障等级变化时需联动问题类型
  failureLeveChange() {
    this.validateForm.patchValue({ problemType: null });
    if (this.validateForm.value.level === 1) {
      console.log(this.validateForm.value.level, 'level1');
      this.questionTypeDisabled = false;
      this.validateForm.value.problemType = null;
      this.questionTypePlaceholder = '请选择问题类型';
      this.problemTypeArr = [
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
    } else if (this.validateForm.value.level === 2) {
      console.log(this.validateForm.value.level,'level2');
      this.questionTypeDisabled = false;
      this.validateForm.value.problemType = null;
      this.questionTypePlaceholder = '请选择问题类型';
      this.problemTypeArr = [
        { key: 1, value: '已知有修复方案的Bug' },
        { key: 2, value: '第三方应用导致的故障' },
        { key: 3, value: 'GC引起的故障' }
      ];
    } else if (this.validateForm.value.level === 3) {
      console.log(this.validateForm.value.level,'level3');
      this.questionTypeDisabled = false;
      this.questionTypePlaceholder = '请选择问题类型';
      this.validateForm.value.problemType = null;
      this.problemTypeArr = [
        { key: 1, value: '应用开发指导，譬如 Cypher 语句优化指导' },
        { key: 2, value: '功能改进' },
        { key: 3, value: '运维管理相关的故障，譬如生成新账户' }
      ];
    } else if (this.validateForm.value.level === 4) {
      console.log(this.validateForm.value.level,'level4');
      this.questionTypeDisabled = true;
      this.questionTypePlaceholder =
        '请简述需要有关Neo4j的信息、改进或文档内容';
      this.problemTypeArr = [];
    }
  }

  // 设置上传文件的请求头
  setHeader = (file: UploadFile): any => {
    // return { token: this.cache.get('neo4j-client', 'token') || '' };
  };

  // 删除文件时进行的操作
  removeFile = (file: UploadFile): boolean => {
    let fileName = '';
    if (file.response) {
      fileName = file.response.result.fileId;
    } else {
      fileName = file.name;
    }
    // 删除文件时 需将fileNameList对应的文件名删除
    // this.fileNameList.splice(
    //   this.fileNameList.findIndex(item => item === fileName),
    //   1
    // );
    // this.ticketFileDelete(fileName);
    return true;
  };


  // 文件上传校验文件大小
  sizeLimit = (file: UploadFile, fileList: UploadFile[]): boolean => {
    if (file.size > 5120000) {
      // this.modalService.error({
      //   nzTitle: '失败',
      //   nzContent: `${file.name} 文件大于5M`
      // });
      return false;
    } else {
      return true;
    }
  };

  // 可以检测文件上传的过程
  handleChange({ file, fileList }: { [key: string]: any }): void {
    const status = file.status;
    if (status === 'uploading') {
      // this.uploading = true;
    }
    if (status === 'done') {
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
    }
  }
}
