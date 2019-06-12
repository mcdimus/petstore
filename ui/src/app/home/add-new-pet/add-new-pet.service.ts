import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewPetService {

  addPetEventSubject:Subject<void> = new Subject<void>();

  registerForAddPet(callback:any):Subscription {
    return this.addPetEventSubject.subscribe(callback);
  }

  displayAddPetModal() {
    this.addPetEventSubject.next();
  }

}
