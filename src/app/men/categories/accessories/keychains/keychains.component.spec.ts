import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeychainsComponent } from './keychains.component';

describe('KeychainsComponent', () => {
  let component: KeychainsComponent;
  let fixture: ComponentFixture<KeychainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeychainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeychainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
