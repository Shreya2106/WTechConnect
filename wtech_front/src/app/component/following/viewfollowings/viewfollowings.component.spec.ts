import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfollowingsComponent } from './viewfollowings.component';

describe('ViewfollowingsComponent', () => {
  let component: ViewfollowingsComponent;
  let fixture: ComponentFixture<ViewfollowingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewfollowingsComponent]
    });
    fixture = TestBed.createComponent(ViewfollowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
