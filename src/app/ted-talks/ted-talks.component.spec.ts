import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TedTalksComponent } from './ted-talks.component';

describe('TedTalksComponent', () => {
  let component: TedTalksComponent;
  let fixture: ComponentFixture<TedTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TedTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TedTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
