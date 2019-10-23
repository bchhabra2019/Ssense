import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxedosComponent } from './tuxedos.component';

describe('TuxedosComponent', () => {
  let component: TuxedosComponent;
  let fixture: ComponentFixture<TuxedosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxedosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
