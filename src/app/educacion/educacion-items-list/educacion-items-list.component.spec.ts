import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionItemsList } from './educacion-items-list.component';

describe('ItemComponent', () => {
  let component: EducacionItemsList;
  let fixture: ComponentFixture<EducacionItemsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionItemsList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionItemsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
