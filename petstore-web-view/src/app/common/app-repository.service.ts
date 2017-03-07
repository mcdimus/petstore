import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Pet} from "./app.types";

@Injectable()
export class AppRepositoryService {

	constructor(private http:Http) {}

	getPets() {
		return this.http.get("/pet/");
	}

	removePet(petId:number) {
		return this.http.delete(`/pet/${petId}`);
	}

	addPet(pet:Pet) {
		return this.http.post('/pet/', pet);
	}

	findPetById(petId:string) {
		return this.http.get(`/pet/${petId}`)
	}
}