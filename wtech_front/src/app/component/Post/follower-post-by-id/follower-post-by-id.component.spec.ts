import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerPostByIdComponent } from './follower-post-by-id.component';

describe('FollowerPostByIdComponent', () => {
  let component: FollowerPostByIdComponent;
  let fixture: ComponentFixture<FollowerPostByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowerPostByIdComponent]
    });
    fixture = TestBed.createComponent(FollowerPostByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
