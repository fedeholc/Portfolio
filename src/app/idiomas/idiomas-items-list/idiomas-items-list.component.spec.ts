import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasItemsListComponent } from './idiomas-items-list.component';

describe('IdiomasItemsListComponent', () => {
  let component: IdiomasItemsListComponent;
  let fixture: ComponentFixture<IdiomasItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasItemsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
