import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralisedKitchenComponent } from './centralised-kitchen.component';

describe('CentralisedKitchenComponent', () => {
  let component: CentralisedKitchenComponent;
  let fixture: ComponentFixture<CentralisedKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralisedKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralisedKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
