import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeadersComponent } from './view-leaders.component';

describe('ViewLeadersComponent', () => {
  let component: ViewLeadersComponent;
  let fixture: ComponentFixture<ViewLeadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLeadersComponent]
    });
    fixture = TestBed.createComponent(ViewLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
