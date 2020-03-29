import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDabbawalaComponent } from './digital-dabbawala.component';

describe('DigitalDabbawalaComponent', () => {
  let component: DigitalDabbawalaComponent;
  let fixture: ComponentFixture<DigitalDabbawalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalDabbawalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalDabbawalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
