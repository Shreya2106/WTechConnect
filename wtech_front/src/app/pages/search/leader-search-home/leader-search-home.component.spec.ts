import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderSearchHomeComponent } from './leader-search-home.component';

describe('LeaderSearchHomeComponent', () => {
  let component: LeaderSearchHomeComponent;
  let fixture: ComponentFixture<LeaderSearchHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderSearchHomeComponent]
    });
    fixture = TestBed.createComponent(LeaderSearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
