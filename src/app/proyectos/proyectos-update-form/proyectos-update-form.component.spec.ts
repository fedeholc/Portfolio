import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosUpdateFormComponent } from './proyectos-update-form.component';

describe('ProyectosUpdateFormComponent', () => {
  let component: ProyectosUpdateFormComponent;
  let fixture: ComponentFixture<ProyectosUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
