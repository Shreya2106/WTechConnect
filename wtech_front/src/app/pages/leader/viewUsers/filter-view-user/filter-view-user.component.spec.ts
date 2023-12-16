import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterViewUserComponent } from './filter-view-user.component';

describe('FilterViewUserComponent', () => {
  let component: FilterViewUserComponent;
  let fixture: ComponentFixture<FilterViewUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterViewUserComponent]
    });
    fixture = TestBed.createComponent(FilterViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
