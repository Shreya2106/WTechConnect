import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByIdLeadComponent } from './post-by-id-lead.component';

describe('PostByIdLeadComponent', () => {
  let component: PostByIdLeadComponent;
  let fixture: ComponentFixture<PostByIdLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostByIdLeadComponent]
    });
    fixture = TestBed.createComponent(PostByIdLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
