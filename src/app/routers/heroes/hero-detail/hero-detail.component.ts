import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
//从路由器（router）包中导入 Router、ActivatedRoute 和 Params 类。
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//这里导入 switchMap 操作符是因为你稍后将会处理路由参数的可观察对象 Observable。
import { switchMap } from 'rxjs/operators';
import { HeroService } from './../hero.service';
@Component({
    selector: 'study-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
    hero$: any = null;

    //通常，你会直接写一个构造函数，让 Angular 把组件所需的服务注入进来，自动定义同名的私有变量，并把它们存进去。
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) { }

    ngOnInit() {
        // 当在组件中订阅一个可观察对象时，你通常总是要在组件销毁时取消这个订阅。
        // 但是也有少数例外情况不需要取消订阅。 ActivateRoute 中的各种可观察对象就是属于这种情况。
        // ActivateRoute 及其可观察对象都是由 Router 本身负责管理的。 Router 会在不再需要时销毁这个路由组件，而注入进去的 ActivateRoute 也随之销毁了。
        // // 不过，你仍然可以随意取消订阅，这不会造成任何损害，而且也不是一项坏的实践。
        // this.hero$ = this.route.paramMap.pipe(
        //     switchMap((params: ParamMap) =>
        //         this.service.getHero(params.get('id')))
        // );

        //快照（不可变）
        //   本应用不需要复用 HeroDetailComponent。 用户总是会先返回英雄列表，再选择另一位英雄。 所以，不存在从一个英雄详情导航到另一个而不用经过英雄列表的情况。 这意味着路由器每次都会创建一个全新的 HeroDetailComponent 实例。
        // 假如你很确定这个 HeroDetailComponent 组件的实例永远、永远不会被复用，那就可以使用快照来简化这段代码。
        // route.snapshot 提供了路由参数的初始值。 你可以通过它来直接访问参数，而不用订阅或者添加 Observable 的操作符。 这样在读写时就会更简单：
          let id = this.route.snapshot.paramMap.get('id');
        //   记住：，用这种技巧，你只得到了这些参数的初始值。 如果有可能连续多次导航到此组件，那么就该用 paramMap 可观察对象的方式。 这个例子中仍然使用了 paramMap 的可观察对象策略。
    }

    gotoHeroes(hero: Hero) {
        let heroId = hero ? hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
      }

}
