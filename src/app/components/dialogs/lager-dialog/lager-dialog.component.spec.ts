import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LagerDialogComponent } from './lager-dialog.component';

describe('LagerDialogComponent', () => {
  let component: LagerDialogComponent;
  let fixture: ComponentFixture<LagerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
