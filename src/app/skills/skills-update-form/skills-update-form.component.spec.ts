import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsUpdateFormComponent } from './skills-update-form.component';

describe('SkillsUpdateFormComponent', () => {
  let component: SkillsUpdateFormComponent;
  let fixture: ComponentFixture<SkillsUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
