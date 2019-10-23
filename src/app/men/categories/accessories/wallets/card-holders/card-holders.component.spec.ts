import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoldersComponent } from './card-holders.component';

describe('CardHoldersComponent', () => {
  let component: CardHoldersComponent;
  let fixture: ComponentFixture<CardHoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
