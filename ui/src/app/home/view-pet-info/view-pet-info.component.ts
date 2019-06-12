import { Component, OnInit } from '@angular/core';
import { Pet } from '../../common/app.types';
import { AppRepositoryService } from '../../common/app-repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-pet-info',
  templateUrl: './view-pet-info.component.html',
  styleUrls: ['./view-pet-info.component.scss']
})
export class ViewPetInfoComponent implements OnInit {

  pet: Pet;
  petTypeImageSrc: string = '/petstore/assets/flat-cute/flat-cute-rabbit.ico';

  constructor(
    private route: ActivatedRoute,
    private repository: AppRepositoryService
  ) { }

  ngOnInit() {
    this.repository.findPetById(this.route.snapshot.params.id).subscribe(pet => this.onPetViewEvent(pet));
  }

  private onPetViewEvent(pet: Pet) {
    this.pet = pet;
    if (pet) {
      this.petTypeImageSrc = '/petstore/assets/flat-cute/flat-cute-' + this.pet.petType.toLowerCase() + '.png';
    } else {
      this.petTypeImageSrc = '/petstore/assets/flat-cute/flat-cute-rabbit.ico';
    }
  }

}
