import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCurationComponent } from './product-curation.component';

describe('ProductCurationComponent', () => {
  let component: ProductCurationComponent;
  let fixture: ComponentFixture<ProductCurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
