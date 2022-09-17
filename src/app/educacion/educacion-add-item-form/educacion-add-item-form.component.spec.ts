import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionAddItemForm } from './educacion-add-item-form.component';

describe('ModalAddEduComponent', () => {
  let component: EducacionAddItemForm;
  let fixture: ComponentFixture<EducacionAddItemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionAddItemForm ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionAddItemForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
