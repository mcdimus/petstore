import { Component, OnInit } from '@angular/core';
import { Pet } from '../common/app.types';
import { AppRepositoryService } from '../common/app-repository.service';
import { AddNewPetService } from './add-new-pet/add-new-pet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private repository: AppRepositoryService,
    private addPetService: AddNewPetService
  ) { }

  ngOnInit(): void {

  }

  onPetRemove(petId: number) {
    this.repository.removePet(petId).subscribe((response) => {
      // this.getPets();
    });
  }

  showPetAddModal() {
    this.addPetService.displayAddPetModal();
  }

  onPetAdd(pet: Pet) {
    this.repository.addPet(pet).subscribe((response) => {
      // this.getPets();
    });
  }

  searchPet(petId: string) {
    this.repository.findPetById(petId).subscribe((response) => {
        const responseBody = response;
        if (responseBody) {
        }
    });
  }

}
