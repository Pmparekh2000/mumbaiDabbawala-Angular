import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesAndVideosComponent } from './images-and-videos.component';

describe('ImagesAndVideosComponent', () => {
  let component: ImagesAndVideosComponent;
  let fixture: ComponentFixture<ImagesAndVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesAndVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesAndVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
