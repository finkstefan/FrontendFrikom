import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategObjComponent } from './kateg-obj.component';

describe('KategObjComponent', () => {
  let component: KategObjComponent;
  let fixture: ComponentFixture<KategObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
