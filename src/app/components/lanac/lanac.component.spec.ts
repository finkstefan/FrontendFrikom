import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanacComponent } from './lanac.component';

describe('LanacComponent', () => {
  let component: LanacComponent;
  let fixture: ComponentFixture<LanacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
