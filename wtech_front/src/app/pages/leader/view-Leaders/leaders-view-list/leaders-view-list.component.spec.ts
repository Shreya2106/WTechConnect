import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersViewListComponent } from './leaders-view-list.component';

describe('LeadersViewListComponent', () => {
  let component: LeadersViewListComponent;
  let fixture: ComponentFixture<LeadersViewListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadersViewListComponent]
    });
    fixture = TestBed.createComponent(LeadersViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
