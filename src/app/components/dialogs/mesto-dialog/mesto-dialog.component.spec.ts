import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MestoDialogComponent } from './mesto-dialog.component';

describe('MestoDialogComponent', () => {
  let component: MestoDialogComponent;
  let fixture: ComponentFixture<MestoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MestoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MestoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
