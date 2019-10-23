import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsBlazersComponent } from './suits-blazers.component';

describe('SuitsBlazersComponent', () => {
  let component: SuitsBlazersComponent;
  let fixture: ComponentFixture<SuitsBlazersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitsBlazersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsBlazersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
