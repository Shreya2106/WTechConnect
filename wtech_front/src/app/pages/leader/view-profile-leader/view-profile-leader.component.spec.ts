import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileLeaderComponent } from './view-profile-leader.component';

describe('ViewProfileLeaderComponent', () => {
  let component: ViewProfileLeaderComponent;
  let fixture: ComponentFixture<ViewProfileLeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProfileLeaderComponent]
    });
    fixture = TestBed.createComponent(ViewProfileLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
