import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFollowerByLeadComponent } from './view-follower-by-lead.component';

describe('ViewFollowerByLeadComponent', () => {
  let component: ViewFollowerByLeadComponent;
  let fixture: ComponentFixture<ViewFollowerByLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFollowerByLeadComponent]
    });
    fixture = TestBed.createComponent(ViewFollowerByLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
