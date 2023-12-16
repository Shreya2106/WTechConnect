import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersFilterLeadersListComponent } from './leaders-filter-leaders-list.component';

describe('LeadersFilterLeadersListComponent', () => {
  let component: LeadersFilterLeadersListComponent;
  let fixture: ComponentFixture<LeadersFilterLeadersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadersFilterLeadersListComponent]
    });
    fixture = TestBed.createComponent(LeadersFilterLeadersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
