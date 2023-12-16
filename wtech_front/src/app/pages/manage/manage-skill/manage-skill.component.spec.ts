import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSkillComponent } from './manage-skill.component';

describe('ManageSkillComponent', () => {
  let component: ManageSkillComponent;
  let fixture: ComponentFixture<ManageSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSkillComponent]
    });
    fixture = TestBed.createComponent(ManageSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
