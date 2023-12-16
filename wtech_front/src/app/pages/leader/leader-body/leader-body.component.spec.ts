import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBodyComponent } from './leader-body.component';

describe('LeaderBodyComponent', () => {
  let component: LeaderBodyComponent;
  let fixture: ComponentFixture<LeaderBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderBodyComponent]
    });
    fixture = TestBed.createComponent(LeaderBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
