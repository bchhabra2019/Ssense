import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportHoldersComponent } from './passport-holders.component';

describe('PassportHoldersComponent', () => {
  let component: PassportHoldersComponent;
  let fixture: ComponentFixture<PassportHoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportHoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
