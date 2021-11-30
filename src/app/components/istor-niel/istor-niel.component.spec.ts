import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstorNielComponent } from './istor-niel.component';

describe('IstorNielComponent', () => {
  let component: IstorNielComponent;
  let fixture: ComponentFixture<IstorNielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstorNielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstorNielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
