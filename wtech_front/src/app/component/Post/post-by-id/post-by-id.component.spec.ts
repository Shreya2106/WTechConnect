import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByIdComponent } from './post-by-id.component';

describe('PostByIdComponent', () => {
  let component: PostByIdComponent;
  let fixture: ComponentFixture<PostByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostByIdComponent]
    });
    fixture = TestBed.createComponent(PostByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
