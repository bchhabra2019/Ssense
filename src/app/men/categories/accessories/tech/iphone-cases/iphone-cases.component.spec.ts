import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneCasesComponent } from './iphone-cases.component';

describe('IphoneCasesComponent', () => {
  let component: IphoneCasesComponent;
  let fixture: ComponentFixture<IphoneCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
