import { Component, OnInit } from '@angular/core';
// 类
// AbstractControl 所有三种表单控件类（FormControl、FormGroup 和 FormArray）的抽象基类。它提供了一些公共的行为和属性。
// FormControl 管理单体表单控件的值和有效性状态。它对应于 HTML 的表单控件，比如 <input> 或 <select>。
// FormGroup 管理一组 AbstractControl 实例的值和有效性状态。该组的属性中包括了它的子控件。组件中的顶级表单就是 FormGroup。
// FormArray管理一些 AbstractControl 实例数组的值和有效性状态。。
// FormBuilder 一个可注入的服务，提供一些用于提供创建控件实例的工厂方法。

// 指令
// FormControlDirective  把一个独立的 FormControl 实例绑定到表单控件元素。
// FormControlName 把一个现有FormGroup中的FormControl实例根据名字绑定到表单控件元素
// FormGroupDirective 把一个现有的FormGroup实例绑定到DOM元素
// FormGroupName 把一个内嵌的FormGroup实例绑定到一个dom元素
// FormArayName  把一个内嵌的FormArray实例绑定到一个dom元素

// Validators:函数验证器
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  // 可以用 FormControl 的构造函数设置初始值，这个例子中它是空字符串。通过在你的组件类中创建这些控件，你可以直接对表单控件的状态进行监听、修改和校验。
  // name = new FormControl('');

  // 步骤 1 - 创建嵌套的分组link
  // 第一版
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });
  // FormBuilder 服务有三个方法：control()、group() 和 array()。这些方法都是工厂方法，用于在组件类中分别生成 FormControl、FormGroup 和 FormArray。
  // 第二版
  // 把字段设为必填（required
  // HTML5 有一组内置的属性，用来进行原生验证，包括 required、minlength、maxlength 等。虽然是可选的，不过你也可以在表单的输入元素上把它们添加为附加属性来使用它们。这里我们把 required 属性添加到 firstName 输入元素上。
  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   })
  // });

  // 第三版
  // 你可以通过把一组（从零项到多项）控件定义在一个数组中来初始化一个 FormArray。为 profileForm 添加一个 aliases 属性，把它定义为 FormArray 类型。
  // 使用 FormBuilder.array() 方法来定义该数组，并用 FormBuilder.control() 方法来往该数组中添加一个初始控件
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([this.fb.control('')])
  });
  // FormBuilder 是一个可注入的服务提供商，它是由 ReactiveFormModule 提供的。只要把它添加到组件的构造函数中就可以注入这个依赖。
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  // updateName() {
  //   this.name.setValue('Nancy');
  // }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  // 当点击按钮时，profileForm 模型中只有 firstName 和 street 被修改了。注意，street 是在 address 属性的对象中被修改的。
  // 这种结构是必须的，因为 patchValue() 方法要针对模型的结构进行更新。patchValue() 只会更新表单模型中所定义的那些属性。
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  // 相对于重复使用 profileForm.get() 方法获取每个实例的方式，getter 可以让你轻松访问表单数组各个实例中的别名。 表单数组实
  // 例用一个数组来代表未定数量的控件。通过 getter 来访问控件很方便，这种方法还能很容易地重复处理更多控件。

  // 使用 getter 语法创建类属性 aliases，以从父表单组中接收表示绰号的表单数组控件。
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  // 定义一个方法来把一个绰号控件动态插入到绰号 FormArray 中。用 FormArray.push() 方法把该控件添加为数组中的新条目
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}





