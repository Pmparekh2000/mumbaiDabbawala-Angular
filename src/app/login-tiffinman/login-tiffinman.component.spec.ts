import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTiffinmanComponent } from './login-tiffinman.component';

describe('LoginTiffinmanComponent', () => {
  let component: LoginTiffinmanComponent;
  let fixture: ComponentFixture<LoginTiffinmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTiffinmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTiffinmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
