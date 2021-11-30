import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MestoComponent } from './mesto.component';

describe('MestoComponent', () => {
  let component: MestoComponent;
  let fixture: ComponentFixture<MestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
