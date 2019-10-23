import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredHatsComponent } from './structured-hats.component';

describe('StructuredHatsComponent', () => {
  let component: StructuredHatsComponent;
  let fixture: ComponentFixture<StructuredHatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuredHatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuredHatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
