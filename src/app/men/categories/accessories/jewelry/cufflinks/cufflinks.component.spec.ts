import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CufflinksComponent } from './cufflinks.component';

describe('CufflinksComponent', () => {
  let component: CufflinksComponent;
  let fixture: ComponentFixture<CufflinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CufflinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CufflinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
