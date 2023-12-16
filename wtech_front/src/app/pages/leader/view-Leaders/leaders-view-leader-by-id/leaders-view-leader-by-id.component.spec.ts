import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersViewLeaderByIdComponent } from './leaders-view-leader-by-id.component';

describe('LeadersViewLeaderByIdComponent', () => {
  let component: LeadersViewLeaderByIdComponent;
  let fixture: ComponentFixture<LeadersViewLeaderByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadersViewLeaderByIdComponent]
    });
    fixture = TestBed.createComponent(LeadersViewLeaderByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
