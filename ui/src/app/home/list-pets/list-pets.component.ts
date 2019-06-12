import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pet } from '../../common/app.types';
import { AppRepositoryService } from '../../common/app-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  pets: Pet[];
  @Output() onPetRemove: EventEmitter<number> = new EventEmitter<number>(false);
  @Output() onPetAddTrigger: EventEmitter<void> = new EventEmitter<void>(false);
  @Output() onPetSearch: EventEmitter<string> = new EventEmitter<string>(false);
  @Output() onViewPetInfo: EventEmitter<Pet> = new EventEmitter<Pet>(false);

  petSearchId: string;
  displayedColumns: string[] = ['name', 'type', 'birthdate', 'action'];

  constructor(
    private repository: AppRepositoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.repository.getPets().subscribe((response) => {
      this.pets = response;
      console.log('pets: ', this.pets);
    });
  }

  viewPetInfoClick(pet: Pet) {
    this.onViewPetInfo.emit(pet);
  }

  onPetRemoveClick($event: any, petId: number) {
    $event.preventDefault();
    $event.stopPropagation();
    this.repository.removePet(petId)
      .subscribe(() => this.pets = this.pets.filter(it => it.petId != petId));
  }

  onPetAddTriggerClick() {
    this.onPetAddTrigger.emit();
  }

  onPetSearchByIdClick($event) {
    if (this.petSearchId) {
      this.onPetSearch.emit(this.petSearchId);
    }
  }

  open(pet: Pet): void {
    this.router.navigate(['id', pet.petId]);
  }
}
