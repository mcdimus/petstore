import {Component, OnInit, Input} from '@angular/core';
import {Pet} from "../../common/app.types";
import {ViewPetInfoService} from "./view-pet-info.service";

declare const $:any;

@Component({
    moduleId: module.id,
    selector: 'view-pet-info',
    templateUrl: 'view-pet-info.component.html'
})
export class ViewPetInfoComponent implements OnInit {

	pet:Pet;
	petTypeImageSrc:string = "/assets/flat-cute/flat-cute-rabbit.ico";

	constructor(private viewPetService:ViewPetInfoService) { }

    ngOnInit() {
		this.viewPetService.registerForViewPetInfoEvent(this.onPetViewEvent.bind(this));
	}

	onPetViewEvent(pet:Pet) {
		this.pet = pet;
		if (pet) {
			this.petTypeImageSrc = "/assets/flat-cute/flat-cute-" + this.pet.petType.toLowerCase() + ".png"
		} else {
			this.petTypeImageSrc = "/assets/flat-cute/flat-cute-rabbit.ico";
		}

		$('#view-pet-modal').modal('show');
	}
}