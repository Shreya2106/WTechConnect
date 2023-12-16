import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPostComponent } from './view-all-post.component';

describe('ViewAllPostComponent', () => {
  let component: ViewAllPostComponent;
  let fixture: ComponentFixture<ViewAllPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllPostComponent]
    });
    fixture = TestBed.createComponent(ViewAllPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
