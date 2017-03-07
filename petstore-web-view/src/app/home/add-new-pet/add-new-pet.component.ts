import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AddNewPetService} from "./add-new-pet.service";
import {Pet} from "../../common/app.types";
import {PET_TYPE_DROPDOWN_CONFIG, PET_TYPE_DROPDOWN_OPTIONS} from "./add-new-pet.config";

declare const $:any;

@Component({
    selector: 'add-new-pet',
    templateUrl: 'add-new-pet.component.html'
})
export class AddNewPetComponent implements OnInit {

	addPetForm: FormGroup;
	petTypeDropdownConfig:any = PET_TYPE_DROPDOWN_CONFIG;
	petTypeDropdownOptions:any = PET_TYPE_DROPDOWN_OPTIONS;
	petImageSrc:string = "/assets/flat-cute/flat-cute-rabbit.ico";

	@Output() onPetAdd:EventEmitter<Pet> = new EventEmitter<Pet>(false);

    constructor(private formBuilder: FormBuilder, private addPetService:AddNewPetService) { }

    ngOnInit() {
    	this.addPetService.registerForAddPet(this.onAddPetEvent.bind(this));
		this.addPetForm = this.formBuilder.group(ADD_PET_FORM);
	}

	onAddPetEvent() {
		$('#add-new-pet-dialog')
			.modal({
				onApprove: () => {
					this.onPetAdd.emit(this.addPetForm.value);
				},
				onShow:() => {
					$('#birthDate').calendar({
						type: 'date',
						onChange: (date, text) => {
							this.addPetForm.get('birthDate').setValue(date);
						}

					});
				}
			})
			.modal('show');
	}

	onPetTypeChange(petType) {
    	if (petType) {
    		this.petImageSrc = "/assets/flat-cute/flat-cute-" + petType.toLowerCase() + ".png";
		} else {
			this.petImageSrc = "/assets/flat-cute/flat-cute-rabbit.ico";
		}
	}
}

export const ADD_PET_FORM = {
	name: ['', Validators.compose([Validators.minLength(1), Validators.maxLength(20), Validators.required])],
	petType: ['', Validators.required],
	birthDate: ['', Validators.required]
};