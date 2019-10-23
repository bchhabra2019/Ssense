import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurComponent } from './fur.component';

describe('FurComponent', () => {
  let component: FurComponent;
  let fixture: ComponentFixture<FurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
