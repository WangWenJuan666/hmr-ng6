import { Component, OnInit,Input ,Output, EventEmitter } from '@angular/core';
// 导入服务
import { EmployeesService } from '../employees.service';
// 导入接口
import { Employee } from '../employee.type';
// 导入HttpResponse
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
// 导入antd服务
import { NzMessageService } from 'ng-zorro-antd';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


// 手机号码的正则
const PHONE_NUMBER_REGEXP = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})

export class EmployeesEditComponent implements OnInit {
  employeeEditForm: FormGroup;
  public isShowEmployeeModal:boolean= true;
  
  constructor(
    private employeesService: EmployeesService,
    private nzMsgService: NzMessageService,
    private fb: FormBuilder,
    private router:Router
  ) { }
  // @Input() childTitle: string;
  @Input() detail:any;
  @Output() initEmit = new EventEmitter<string>();
  ngOnInit() {
    console.log('21');
    this.employeeEditForm = this.fb.group({
      // 注意：如果有两个及其以上的验证规则，需要使用 [] 来包裹
      name: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['0', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern(PHONE_NUMBER_REGEXP)],
      // nver: [null, [Validators.required]],
      joinDate: ['', this.joinDateValidate]
    })
    console.log(this.detail,'childTitle');
  }
  // 取消编辑
  handleEditEmployeeCancel() {
    // console.log('取消编辑')
    console.log('来自子组件的打印');
    this.initEmit.emit("子组件初始化成功");
    this.isShowEmployeeModal = false;
    // this.router.navigate(['../'])

    // this.resetEmployee();
  }

  editEmployee() {
    // console.log('确认修改')
    // const employeeEditForm = this.employeeEditForm;
    // const { controls } = employeeEditForm;

    // Object.keys(controls).forEach(key => {
    //   controls[key].markAsDirty();
    //   controls[key].updateValueAndValidity();
    // });
  }
  // 日期的自定义校验规则
  joinDateValidate(control: FormControl) {
    const selectDate = +control.value;
    // console.log(selectDate)
    const curDate = +new Date();

    if (selectDate > curDate) {
      return { date: true };
    }

    return null;
  }
}
