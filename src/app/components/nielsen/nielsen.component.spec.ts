import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NielsenComponent } from './nielsen.component';

describe('NielsenComponent', () => {
  let component: NielsenComponent;
  let fixture: ComponentFixture<NielsenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NielsenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NielsenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
