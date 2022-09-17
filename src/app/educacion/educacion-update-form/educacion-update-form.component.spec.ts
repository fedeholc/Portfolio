import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionUpdateForm } from './educacion-update-form.component';

describe('ModalbasicComponent', () => {
  let component: EducacionUpdateForm;
  let fixture: ComponentFixture<EducacionUpdateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionUpdateForm ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionUpdateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
