import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByLeaderComponent } from './post-by-leader.component';

describe('PostByLeaderComponent', () => {
  let component: PostByLeaderComponent;
  let fixture: ComponentFixture<PostByLeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostByLeaderComponent]
    });
    fixture = TestBed.createComponent(PostByLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
