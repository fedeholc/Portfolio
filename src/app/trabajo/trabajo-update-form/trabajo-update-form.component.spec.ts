import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoUpdateFormComponent } from './trabajo-update-form.component';

describe('TrabajoUpdateFormComponent', () => {
  let component: TrabajoUpdateFormComponent;
  let fixture: ComponentFixture<TrabajoUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
