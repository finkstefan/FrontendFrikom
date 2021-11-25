import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjekatDialogComponent } from './objekat-dialog.component';

describe('ObjekatDialogComponent', () => {
  let component: ObjekatDialogComponent;
  let fixture: ComponentFixture<ObjekatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjekatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjekatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
