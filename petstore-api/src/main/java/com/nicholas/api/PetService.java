package com.nicholas.api;

import com.nicholas.persist.models.Pet;
import com.nicholas.persist.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Nicholas Azar on March 06, 2017.
 */
@Service
public class PetService {

    @Autowired
    PetRepository petRepository;

    public Pet findPet(String petId) {
        return this.petRepository.findOne(petId);
    }

    public List<Pet> findAllPets() {
        return this.petRepository.findAll();
    }

    public Pet addPet(Pet pet) {
        return this.petRepository.insert(pet);
    }

    public void deletePet(String petId) {
        this.petRepository.delete(petId);
    }

    public void updatePet(Pet pet) {
        this.petRepository.save(pet);
    }

}
