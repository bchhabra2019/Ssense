import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VNecksComponent } from './v-necks.component';

describe('VNecksComponent', () => {
  let component: VNecksComponent;
  let fixture: ComponentFixture<VNecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VNecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VNecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
