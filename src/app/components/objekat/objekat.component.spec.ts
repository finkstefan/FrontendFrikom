import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjekatComponent } from './objekat.component';

describe('ObjekatComponent', () => {
  let component: ObjekatComponent;
  let fixture: ComponentFixture<ObjekatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjekatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjekatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
