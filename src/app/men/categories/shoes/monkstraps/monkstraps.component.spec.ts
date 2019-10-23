import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkstrapsComponent } from './monkstraps.component';

describe('MonkstrapsComponent', () => {
  let component: MonkstrapsComponent;
  let fixture: ComponentFixture<MonkstrapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkstrapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkstrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
