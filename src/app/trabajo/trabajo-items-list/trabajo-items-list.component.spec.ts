import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoItemsListComponent } from './trabajo-items-list.component';

describe('TrabajoItemsListComponent', () => {
  let component: TrabajoItemsListComponent;
  let fixture: ComponentFixture<TrabajoItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoItemsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
