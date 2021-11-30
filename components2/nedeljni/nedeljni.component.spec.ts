import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NedeljniComponent } from './nedeljni.component';

describe('NedeljniComponent', () => {
  let component: NedeljniComponent;
  let fixture: ComponentFixture<NedeljniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NedeljniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NedeljniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
