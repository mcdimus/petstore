import { Injectable } from '@angular/core';
import { Pet } from './app.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppRepositoryService {

  constructor(private http: HttpClient) {
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>('/pet/');
  }

  removePet(petId: number): Observable<any> {
    return this.http.delete<any>(`/pet/${petId}`);
  }

  addPet(pet: Pet) {
    return this.http.post('/pet/', pet);
  }

  findPetById(petId: string): Observable<Pet> {
    return this.http.get<Pet>(`/pet/${petId}`);
  }

}
