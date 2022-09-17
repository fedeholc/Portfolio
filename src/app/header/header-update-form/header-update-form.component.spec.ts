import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUpdateFormComponent } from './header-update-form.component';

describe('HeaderUpdateFormComponent', () => {
  let component: HeaderUpdateFormComponent;
  let fixture: ComponentFixture<HeaderUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
