import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaistcoatsComponent } from './waistcoats.component';

describe('WaistcoatsComponent', () => {
  let component: WaistcoatsComponent;
  let fixture: ComponentFixture<WaistcoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaistcoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaistcoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
