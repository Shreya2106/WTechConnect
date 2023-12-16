import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderHomeComponent } from './leader-home.component';

describe('LeaderHomeComponent', () => {
  let component: LeaderHomeComponent;
  let fixture: ComponentFixture<LeaderHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderHomeComponent]
    });
    fixture = TestBed.createComponent(LeaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
