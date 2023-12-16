import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFollowingByUserComponent } from './view-following-by-user.component';

describe('ViewFollowingByUserComponent', () => {
  let component: ViewFollowingByUserComponent;
  let fixture: ComponentFixture<ViewFollowingByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFollowingByUserComponent]
    });
    fixture = TestBed.createComponent(ViewFollowingByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
