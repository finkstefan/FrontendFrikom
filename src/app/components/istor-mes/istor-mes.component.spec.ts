import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstorMesComponent } from './istor-mes.component';

describe('IstorMesComponent', () => {
  let component: IstorMesComponent;
  let fixture: ComponentFixture<IstorMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstorMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
