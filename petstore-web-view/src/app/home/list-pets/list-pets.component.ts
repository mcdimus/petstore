import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Pet} from "../../common/app.types";

@Component({
	moduleId: module.id,
	selector: 'list-pets',
	templateUrl: 'list-pets.component.html'
})
export class ListPetsComponent implements OnInit {

	@Input() pets:Pet[];
	@Output() onPetRemove:EventEmitter<number> = new EventEmitter<number>(false);
	@Output() onPetAddTrigger:EventEmitter<void> = new EventEmitter<void>(false);
	@Output() onPetSearch:EventEmitter<string> = new EventEmitter<string>(false);
	@Output() onViewPetInfo:EventEmitter<Pet> = new EventEmitter<Pet>(false);

	petSearchId:string;

	constructor() {
	}

	ngOnInit() {}

	viewPetInfoClick(pet:Pet) {
		this.onViewPetInfo.emit(pet);
	}

	onPetRemoveClick($event:any, petId:number) {
		$event.preventDefault();
		$event.stopPropagation();
		this.onPetRemove.emit(petId);
	}

	onPetAddTriggerClick() {
		this.onPetAddTrigger.emit();
	}

	onPetSearchByIdClick($event) {
		if (this.petSearchId) {
			this.onPetSearch.emit(this.petSearchId);
		}
	}
}