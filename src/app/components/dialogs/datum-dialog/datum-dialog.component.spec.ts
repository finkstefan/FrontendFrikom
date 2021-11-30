import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatumDialogComponent } from './datum-dialog.component';

describe('DatumDialogComponent', () => {
  let component: DatumDialogComponent;
  let fixture: ComponentFixture<DatumDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatumDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
