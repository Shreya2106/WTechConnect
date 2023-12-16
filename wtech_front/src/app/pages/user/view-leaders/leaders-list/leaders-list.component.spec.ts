import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersListComponent } from './leaders-list.component';

describe('LeadersListComponent', () => {
  let component: LeadersListComponent;
  let fixture: ComponentFixture<LeadersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadersListComponent]
    });
    fixture = TestBed.createComponent(LeadersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
