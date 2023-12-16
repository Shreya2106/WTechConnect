import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByFollowerComponent } from './post-by-follower.component';

describe('PostByFollowerComponent', () => {
  let component: PostByFollowerComponent;
  let fixture: ComponentFixture<PostByFollowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostByFollowerComponent]
    });
    fixture = TestBed.createComponent(PostByFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
