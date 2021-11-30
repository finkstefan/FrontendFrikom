import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstorCenaComponent } from './istor-cena.component';

describe('IstorCenaComponent', () => {
  let component: IstorCenaComponent;
  let fixture: ComponentFixture<IstorCenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstorCenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstorCenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
