import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesecniDialogComponent } from './mesecni-dialog.component';

describe('MesecniDialogComponent', () => {
  let component: MesecniDialogComponent;
  let fixture: ComponentFixture<MesecniDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesecniDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesecniDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
