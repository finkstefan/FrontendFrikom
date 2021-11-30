import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrstaAmbalComponent } from './vrstaambal.component';

describe('VrstaambalComponent', () => {
  let component: VrstaAmbalComponent;
  let fixture: ComponentFixture<VrstaAmbalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrstaAmbalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrstaAmbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
