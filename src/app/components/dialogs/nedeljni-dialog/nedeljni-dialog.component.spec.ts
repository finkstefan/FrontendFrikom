import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NedeljniDialogComponent } from './nedeljni-dialog.component';

describe('NedeljniDialogComponent', () => {
  let component: NedeljniDialogComponent;
  let fixture: ComponentFixture<NedeljniDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NedeljniDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NedeljniDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
