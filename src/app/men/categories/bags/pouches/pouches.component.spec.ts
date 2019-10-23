import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PouchesComponent } from './pouches.component';

describe('PouchesComponent', () => {
  let component: PouchesComponent;
  let fixture: ComponentFixture<PouchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PouchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PouchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
