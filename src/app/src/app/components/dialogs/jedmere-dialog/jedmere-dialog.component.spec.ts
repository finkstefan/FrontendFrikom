import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JedmereDialogComponent } from './jedmere-dialog.component';

describe('JedmereDialogComponent', () => {
  let component: JedmereDialogComponent;
  let fixture: ComponentFixture<JedmereDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JedmereDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JedmereDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
