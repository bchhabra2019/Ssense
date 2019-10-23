import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeacoatsComponent } from './peacoats.component';

describe('PeacoatsComponent', () => {
  let component: PeacoatsComponent;
  let fixture: ComponentFixture<PeacoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeacoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeacoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
