import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderByIdComponent } from './leader-by-id.component';

describe('LeaderByIdComponent', () => {
  let component: LeaderByIdComponent;
  let fixture: ComponentFixture<LeaderByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderByIdComponent]
    });
    fixture = TestBed.createComponent(LeaderByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
