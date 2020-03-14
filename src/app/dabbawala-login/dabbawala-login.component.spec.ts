import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DabbawalaLoginComponent } from './dabbawala-login.component';

describe('DabbawalaLoginComponent', () => {
  let component: DabbawalaLoginComponent;
  let fixture: ComponentFixture<DabbawalaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DabbawalaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DabbawalaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
