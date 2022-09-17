import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosAddItemFormComponent } from './proyectos-add-item-form.component';

describe('ProyectosAddItemFormComponent', () => {
  let component: ProyectosAddItemFormComponent;
  let fixture: ComponentFixture<ProyectosAddItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosAddItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosAddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
