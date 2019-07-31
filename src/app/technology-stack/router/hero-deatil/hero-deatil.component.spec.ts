import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDeatilComponent } from './hero-deatil.component';

describe('HeroDeatilComponent', () => {
  let component: HeroDeatilComponent;
  let fixture: ComponentFixture<HeroDeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
