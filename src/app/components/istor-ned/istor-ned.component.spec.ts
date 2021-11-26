import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstorNedComponent } from './istor-ned.component';

describe('IstorNedComponent', () => {
  let component: IstorNedComponent;
  let fixture: ComponentFixture<IstorNedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstorNedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstorNedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
