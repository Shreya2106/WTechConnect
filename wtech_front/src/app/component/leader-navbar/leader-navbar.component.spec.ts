import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderNavbarComponent } from './leader-navbar.component';

describe('LeaderNavbarComponent', () => {
  let component: LeaderNavbarComponent;
  let fixture: ComponentFixture<LeaderNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderNavbarComponent]
    });
    fixture = TestBed.createComponent(LeaderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
