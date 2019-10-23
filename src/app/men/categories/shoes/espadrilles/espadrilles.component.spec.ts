import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspadrillesComponent } from './espadrilles.component';

describe('EspadrillesComponent', () => {
  let component: EspadrillesComponent;
  let fixture: ComponentFixture<EspadrillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspadrillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspadrillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
