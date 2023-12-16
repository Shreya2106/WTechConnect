import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfollowerComponent } from './viewfollower.component';

describe('ViewfollowerComponent', () => {
  let component: ViewfollowerComponent;
  let fixture: ComponentFixture<ViewfollowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewfollowerComponent]
    });
    fixture = TestBed.createComponent(ViewfollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
