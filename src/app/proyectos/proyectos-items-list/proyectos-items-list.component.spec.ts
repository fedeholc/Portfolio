import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosItemsListComponent } from './proyectos-items-list.component';

describe('ProyectosItemsListComponent', () => {
  let component: ProyectosItemsListComponent;
  let fixture: ComponentFixture<ProyectosItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosItemsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
