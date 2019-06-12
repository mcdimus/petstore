import { TestBed } from '@angular/core/testing';

import { AddNewPetService } from './add-new-pet.service';

describe('AddNewPetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewPetService = TestBed.get(AddNewPetService);
    expect(service).toBeTruthy();
  });
});
