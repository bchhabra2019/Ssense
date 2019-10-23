import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewnecksComponent } from './crewnecks.component';

describe('CrewnecksComponent', () => {
  let component: CrewnecksComponent;
  let fixture: ComponentFixture<CrewnecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewnecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewnecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
