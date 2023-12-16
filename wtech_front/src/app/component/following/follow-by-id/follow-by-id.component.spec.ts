import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowByIdComponent } from './follow-by-id.component';

describe('FollowByIdComponent', () => {
  let component: FollowByIdComponent;
  let fixture: ComponentFixture<FollowByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowByIdComponent]
    });
    fixture = TestBed.createComponent(FollowByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
