import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAddItemFormComponent } from './skills-add-item-form.component';

describe('SkillsAddItemFormComponent', () => {
  let component: SkillsAddItemFormComponent;
  let fixture: ComponentFixture<SkillsAddItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAddItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsAddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
