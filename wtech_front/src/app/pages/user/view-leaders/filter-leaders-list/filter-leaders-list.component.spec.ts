import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLeadersListComponent } from './filter-leaders-list.component';

describe('FilterLeadersListComponent', () => {
  let component: FilterLeadersListComponent;
  let fixture: ComponentFixture<FilterLeadersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterLeadersListComponent]
    });
    fixture = TestBed.createComponent(FilterLeadersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
