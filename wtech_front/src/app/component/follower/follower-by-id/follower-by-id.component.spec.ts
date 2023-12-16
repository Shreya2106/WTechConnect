import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerByIdComponent } from './follower-by-id.component';

describe('FollowerByIdComponent', () => {
  let component: FollowerByIdComponent;
  let fixture: ComponentFixture<FollowerByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowerByIdComponent]
    });
    fixture = TestBed.createComponent(FollowerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
