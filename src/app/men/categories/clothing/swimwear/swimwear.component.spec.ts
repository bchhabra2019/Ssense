import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimwearComponent } from './swimwear.component';

describe('SwimwearComponent', () => {
  let component: SwimwearComponent;
  let fixture: ComponentFixture<SwimwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
