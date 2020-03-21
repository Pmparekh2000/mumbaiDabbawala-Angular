import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOfflineComponent } from './pay-offline.component';

describe('PayOfflineComponent', () => {
  let component: PayOfflineComponent;
  let fixture: ComponentFixture<PayOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
