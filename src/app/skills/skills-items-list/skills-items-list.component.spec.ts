import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsItemsListComponent } from './skills-items-list.component';

describe('SkillsItemsListComponent', () => {
  let component: SkillsItemsListComponent;
  let fixture: ComponentFixture<SkillsItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsItemsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
