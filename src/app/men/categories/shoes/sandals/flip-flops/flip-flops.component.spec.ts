import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipFlopsComponent } from './flip-flops.component';

describe('FlipFlopsComponent', () => {
  let component: FlipFlopsComponent;
  let fixture: ComponentFixture<FlipFlopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipFlopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipFlopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
