import { Component, OnInit } from '@angular/core';
import {AppRepositoryService} from "../common/app-repository.service";
import {Pet} from "../common/app.types";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ADD_PET_FORM} from "./add-new-pet/add-new-pet.component";
import {AddNewPetService} from "./add-new-pet/add-new-pet.service";
import {ViewPetInfoService} from "./view-pet-info/view-pet-info.service";


@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

	pets:Pet[];

    constructor(private repository:AppRepositoryService, private addPetService:AddNewPetService, private viewPetService:ViewPetInfoService) { }

    ngOnInit() {
    	this.getPets();
	}

	getPets() {
		this.repository.getPets().subscribe((response) => {
			this.pets = response.json();
			console.log('pets: ', this.pets);
		});
	}

	onPetRemove(petId:number) {
    	this.repository.removePet(petId).subscribe((response) => {
			this.getPets();
		})
	}

	onViewPetInfo(pet:Pet) {
		this.viewPetService.displayViewPetInfoModal(pet);
	}

	showPetAddModal() {
		this.addPetService.displayAddPetModal();
	}

	onPetAdd(pet:Pet) {
    	this.repository.addPet(pet).subscribe((response) => {
			this.getPets();
		})
	}

	searchPet(petId:string) {
    	this.repository.findPetById(petId).subscribe((response) => {
			if (response.text() && response.text().length > 0) {
				const responseBody = response.json();
				if (responseBody) {
					this.viewPetService.displayViewPetInfoModal(responseBody);
				}
			} else {
				// not found.
			}
		})
	}
}