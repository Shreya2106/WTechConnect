import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderupdatesComponent } from './leaderupdates.component';

describe('LeaderupdatesComponent', () => {
  let component: LeaderupdatesComponent;
  let fixture: ComponentFixture<LeaderupdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderupdatesComponent]
    });
    fixture = TestBed.createComponent(LeaderupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
