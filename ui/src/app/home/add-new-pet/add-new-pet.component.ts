import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PET_TYPE_DROPDOWN_CONFIG, PET_TYPE_DROPDOWN_OPTIONS } from './add-new-pet.config';
import { Pet } from '../../common/app.types';
import { AppRepositoryService } from '../../common/app-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-pet',
  templateUrl: './add-new-pet.component.html',
  styleUrls: ['./add-new-pet.component.scss']
})
export class AddNewPetComponent implements OnInit {

  addPetForm: FormGroup;
  petTypeDropdownConfig: any = PET_TYPE_DROPDOWN_CONFIG;
  petTypeDropdownOptions: any[] = PET_TYPE_DROPDOWN_OPTIONS;
  petImageSrc: string = '/petstore/assets/flat-cute/flat-cute-rabbit.ico';

  @Output() onPetAdd: EventEmitter<Pet> = new EventEmitter<Pet>(false);

  constructor(
    private formBuilder: FormBuilder,
    private repository: AppRepositoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addPetForm = this.formBuilder.group(ADD_PET_FORM);
  }

  create(): void {
    this.repository.addPet(this.addPetForm.value).subscribe(() => {
      console.log('added');
      this.router.navigate(['']);
    });
  }

  onPetTypeChange(petType) {
    if (petType) {
      this.petImageSrc = '/petstore/assets/flat-cute/flat-cute-' + petType.toLowerCase() + '.png';
    } else {
      this.petImageSrc = '/petstore/assets/flat-cute/flat-cute-rabbit.ico';
    }
  }

}

export const ADD_PET_FORM = {
  name: ['', Validators.compose([Validators.minLength(1), Validators.maxLength(20), Validators.required])],
  petType: ['', Validators.required],
  birthDate: ['', Validators.required]
};
