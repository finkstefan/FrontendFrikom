import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NielsenDialogComponent } from './nielsen-dialog.component';

describe('NielsenDialogComponent', () => {
  let component: NielsenDialogComponent;
  let fixture: ComponentFixture<NielsenDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NielsenDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NielsenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
