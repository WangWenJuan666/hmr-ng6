import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//导入 switchMap 操作符，在路由参数的 Observable 对象上执行操作。
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  selectedHero: Hero;
  heroes$: Observable<Hero[]>;
  selectedId: number;
  heroes: Hero[];

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
        switchMap(params => {
          // (+) before `params.get()` turns the string into a number
          this.selectedId = +params.get('id');
          return this.service.getHeroes();
        })
      );
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.service.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
