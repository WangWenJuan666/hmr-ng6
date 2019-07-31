
import { Directive,HostBinding, } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//     return (control: AbstractControl): {[key: string]: any} | null => {
//       const forbidden = nameRe.test(control.value);
//       return forbidden ? {'forbiddenName': {value: control.value}} : null;
//     };
//   }
/** A hero's name can't match the hero's alter ego */
export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const name = control.get('name');
    const alterEgo = control.get('alterEgo');
  
    return name && alterEgo && name.value === alterEgo.value ? { 'identityRevealed': true } : null;
  };
  
  @Directive ({
    selector: '[appIdentityRevealed]',
    providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true }]
  })
  export class IdentityRevealedValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {
      return identityRevealedValidator(control)
    }
  }
  
//   这个函数实际上是一个工厂，它接受一个用来检测指定名字是否已被禁用的正则表达式，并返回一个验证器函数。
// 在本例中，禁止的名字是“bob”； 验证器会拒绝任何带有“bob”的英雄名字。 在其他地方，只要配置的正则表达式可以匹配上，它可能拒绝“alice”或者任何其他名字。
// forbiddenNameValidator 工厂函数返回配置好的验证器函数。 该函数接受一个 Angular 控制器对象，并在控制器值有效时返回 null，或无效时返回验证错误对象。 验证错误对象通常有一个名为验证秘钥（forbiddenName）的属性。其值为一个任意词典，你可以用来插入错误信息（{name}）。
// 自定义异步验证器和同步验证器很像，只是它们必须返回一个稍后会输出 null 或“验证错误对象”的承诺（Promise）或可观察对象，如果是可观察对象，那么它必须在某个时间点被完成（complete），那时候这个表单就会使用它输出的最后一个值作为验证结果。（译注：HTTP 服务是自动完成的，但是某些自定义的可观察对象可能需要手动调用 complete 方法）