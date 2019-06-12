import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PET_TYPE_DROPDOWN_CONFIG, PET_TYPE_DROPDOWN_OPTIONS } from '../add-new-pet/add-new-pet.config';
import { Pet } from '../../common/app.types';
import { AppRepositoryService } from '../../common/app-repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-pet',
  templateUrl: './edit-pet-info.component.html',
  styleUrls: ['./edit-pet-info.component.scss']
})
export class EditPetInfoComponent implements OnInit {

  private petId: number;
  editPetForm: FormGroup;
  petTypeDropdownConfig: any = PET_TYPE_DROPDOWN_CONFIG;
  petTypeDropdownOptions: any[] = PET_TYPE_DROPDOWN_OPTIONS;
  petImageSrc: string = '';

  @Output() onPetAdd: EventEmitter<Pet> = new EventEmitter<Pet>(false);

  constructor(
    private formBuilder: FormBuilder,
    private repository: AppRepositoryService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.editPetForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(1), Validators.maxLength(20), Validators.required])],
      petType: ['', Validators.required],
      birthDate: ['', Validators.required]
    });

    this.repository.findPetById(this.route.snapshot.params.id).subscribe(pet => {
      this.petId = pet.petId;
      this.editPetForm.patchValue(pet);
      this.editPetForm.patchValue({birthDate: new Date(pet.birthDate)});
      this.onPetTypeChange(pet.petType);
    });
  }

  update(): void {
    this.repository.updatePet(this.petId, this.editPetForm.value).subscribe(() => {
      console.log('updated');
      this.router.navigate(['id', this.petId]);
    });
  }

  onPetTypeChange(petType): void {
    if (petType) {
      this.petImageSrc = '/assets/flat-cute/flat-cute-' + petType.toLowerCase() + '.png';
    } else {
      this.petImageSrc = '/assets/flat-cute/flat-cute-rabbit.ico';
    }
  }

  cancel(): void {
    this.location.back();
  }

}


