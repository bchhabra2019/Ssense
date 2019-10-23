import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoPantsComponent } from './cargo-pants.component';

describe('CargoPantsComponent', () => {
  let component: CargoPantsComponent;
  let fixture: ComponentFixture<CargoPantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoPantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
