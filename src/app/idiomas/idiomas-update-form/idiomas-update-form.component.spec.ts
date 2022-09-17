import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasUpdateFormComponent } from './idiomas-update-form.component';

describe('IdiomasUpdateFormComponent', () => {
  let component: IdiomasUpdateFormComponent;
  let fixture: ComponentFixture<IdiomasUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
