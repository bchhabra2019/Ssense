import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankTopsComponent } from './tank-tops.component';

describe('TankTopsComponent', () => {
  let component: TankTopsComponent;
  let fixture: ComponentFixture<TankTopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankTopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
