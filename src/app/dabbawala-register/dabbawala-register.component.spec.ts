import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DabbawalaRegisterComponent } from './dabbawala-register.component';

describe('DabbawalaRegisterComponent', () => {
  let component: DabbawalaRegisterComponent;
  let fixture: ComponentFixture<DabbawalaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DabbawalaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DabbawalaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
