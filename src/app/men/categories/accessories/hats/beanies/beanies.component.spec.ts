import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaniesComponent } from './beanies.component';

describe('BeaniesComponent', () => {
  let component: BeaniesComponent;
  let fixture: ComponentFixture<BeaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
