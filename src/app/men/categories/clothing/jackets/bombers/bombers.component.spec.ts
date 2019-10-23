import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombersComponent } from './bombers.component';

describe('BombersComponent', () => {
  let component: BombersComponent;
  let fixture: ComponentFixture<BombersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
