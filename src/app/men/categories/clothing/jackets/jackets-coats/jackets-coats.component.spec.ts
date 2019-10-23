import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketsCoatsComponent } from './jackets-coats.component';

describe('JacketsCoatsComponent', () => {
  let component: JacketsCoatsComponent;
  let fixture: ComponentFixture<JacketsCoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacketsCoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacketsCoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
