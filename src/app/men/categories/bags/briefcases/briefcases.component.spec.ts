import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcasesComponent } from './briefcases.component';

describe('BriefcasesComponent', () => {
  let component: BriefcasesComponent;
  let fixture: ComponentFixture<BriefcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
