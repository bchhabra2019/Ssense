import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipupComponent } from './zipup.component';

describe('ZipupComponent', () => {
  let component: ZipupComponent;
  let fixture: ComponentFixture<ZipupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
