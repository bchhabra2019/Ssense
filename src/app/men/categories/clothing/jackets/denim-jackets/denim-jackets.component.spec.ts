import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenimJacketsComponent } from './denim-jackets.component';

describe('DenimJacketsComponent', () => {
  let component: DenimJacketsComponent;
  let fixture: ComponentFixture<DenimJacketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenimJacketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenimJacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
