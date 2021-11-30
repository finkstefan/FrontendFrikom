import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanacDialogComponent } from './lanac-dialog.component';

describe('LanacDialogComponent', () => {
  let component: LanacDialogComponent;
  let fixture: ComponentFixture<LanacDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanacDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanacDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
