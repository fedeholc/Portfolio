import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoAddItemFormComponent } from './trabajo-add-item-form.component';

describe('TrabajoAddItemFormComponent', () => {
  let component: TrabajoAddItemFormComponent;
  let fixture: ComponentFixture<TrabajoAddItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoAddItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoAddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
