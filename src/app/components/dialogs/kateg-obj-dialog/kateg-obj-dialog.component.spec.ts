import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategObjDialogComponent } from './kateg-obj-dialog.component';

describe('KategObjDialogComponent', () => {
  let component: KategObjDialogComponent;
  let fixture: ComponentFixture<KategObjDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategObjDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategObjDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
