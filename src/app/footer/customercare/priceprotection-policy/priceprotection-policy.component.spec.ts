import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceprotectionPolicyComponent } from './priceprotection-policy.component';

describe('PriceprotectionPolicyComponent', () => {
  let component: PriceprotectionPolicyComponent;
  let fixture: ComponentFixture<PriceprotectionPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceprotectionPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceprotectionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
