import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasAddItemFormComponent } from './idiomas-add-item-form.component';

describe('IdiomasAddItemFormComponent', () => {
  let component: IdiomasAddItemFormComponent;
  let fixture: ComponentFixture<IdiomasAddItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasAddItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasAddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
