package ee.mcdimus.petstore.service;

import ee.mcdimus.petstore.dao.PetRepository;
import ee.mcdimus.petstore.model.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by Nicholas Azar on March 06, 2017.
 */
@Service
public class PetService {

    @Autowired
    PetRepository petRepository;

    public Optional<Pet> findPet(String petId) {
        return this.petRepository.findById(petId);
    }

    public List<Pet> findAllPets() {
        return this.petRepository.findAll();
    }

    public Pet addPet(Pet pet) {
        return this.petRepository.insert(pet);
    }

    public void deletePet(String petId) {
        this.petRepository.deleteById(petId);
    }

    public void updatePet(Pet pet) {
        this.petRepository.save(pet);
    }

}
