import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyClipsComponent } from './money-clips.component';

describe('MoneyClipsComponent', () => {
  let component: MoneyClipsComponent;
  let fixture: ComponentFixture<MoneyClipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyClipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
