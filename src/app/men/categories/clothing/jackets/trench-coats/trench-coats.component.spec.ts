import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenchCoatsComponent } from './trench-coats.component';

describe('TrenchCoatsComponent', () => {
  let component: TrenchCoatsComponent;
  let fixture: ComponentFixture<TrenchCoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrenchCoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenchCoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
