import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserByIdComponent } from './view-user-by-id.component';

describe('ViewUserByIdComponent', () => {
  let component: ViewUserByIdComponent;
  let fixture: ComponentFixture<ViewUserByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserByIdComponent]
    });
    fixture = TestBed.createComponent(ViewUserByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
