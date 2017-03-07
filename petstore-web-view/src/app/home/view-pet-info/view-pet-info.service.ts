import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Pet} from "../../common/app.types";


@Injectable()
export class ViewPetInfoService {

	viewPetInfoSubject:Subject<Pet> = new Subject<Pet>();

	constructor() {}

	registerForViewPetInfoEvent(callback:any) {
		return this.viewPetInfoSubject.subscribe(callback);
	}

	displayViewPetInfoModal(pet:Pet) {
		this.viewPetInfoSubject.next(pet);
	}
}