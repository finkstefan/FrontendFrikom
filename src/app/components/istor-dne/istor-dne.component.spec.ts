import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstorDneComponent } from './istor-dne.component';

describe('IstorDneComponent', () => {
  let component: IstorDneComponent;
  let fixture: ComponentFixture<IstorDneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstorDneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstorDneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
