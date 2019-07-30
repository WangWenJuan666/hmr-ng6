import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Es6IteratorAndForOfComponent } from './es6-iterator-and-for-of.component';

describe('Es6IteratorAndForOfComponent', () => {
  let component: Es6IteratorAndForOfComponent;
  let fixture: ComponentFixture<Es6IteratorAndForOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es6IteratorAndForOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es6IteratorAndForOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
