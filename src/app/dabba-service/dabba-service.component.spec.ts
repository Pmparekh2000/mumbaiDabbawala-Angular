import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DabbaServiceComponent } from './dabba-service.component';

describe('DabbaServiceComponent', () => {
  let component: DabbaServiceComponent;
  let fixture: ComponentFixture<DabbaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DabbaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DabbaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
