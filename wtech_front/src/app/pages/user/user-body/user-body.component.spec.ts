import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBodyComponent } from './user-body.component';

describe('UserBodyComponent', () => {
  let component: UserBodyComponent;
  let fixture: ComponentFixture<UserBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBodyComponent]
    });
    fixture = TestBed.createComponent(UserBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
