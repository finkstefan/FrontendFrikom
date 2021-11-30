import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesecniComponent } from './mesecni.component';

describe('MesecniComponent', () => {
  let component: MesecniComponent;
  let fixture: ComponentFixture<MesecniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesecniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesecniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
