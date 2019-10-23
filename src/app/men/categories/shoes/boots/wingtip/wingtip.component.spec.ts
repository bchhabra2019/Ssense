import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WingtipComponent } from './wingtip.component';

describe('WingtipComponent', () => {
  let component: WingtipComponent;
  let fixture: ComponentFixture<WingtipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WingtipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WingtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
