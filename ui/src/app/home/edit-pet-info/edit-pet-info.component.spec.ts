import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetInfoComponent } from './edit-pet-info.component';

describe('EditPetInfoComponent', () => {
  let component: EditPetInfoComponent;
  let fixture: ComponentFixture<EditPetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
