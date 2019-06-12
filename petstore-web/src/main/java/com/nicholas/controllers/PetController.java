package com.nicholas.controllers;

import com.nicholas.api.PetService;
import com.nicholas.persist.models.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Nicholas Azar on March 06, 2017.
 */
@RestController
@RequestMapping("/pet")
public class PetController {

    @Autowired
    PetService petService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Pet> findAllPets() {
        return this.petService.findAllPets();
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Pet addPetToStore(@RequestBody Pet pet) {
        return this.petService.addPet(pet);
    }

    @RequestMapping(value = "/{petId}", method = RequestMethod.GET)
    public Pet findPetById(@PathVariable("petId") String petId) {
        return this.petService.findPet(petId);
    }

    @RequestMapping(value = "/{petId}", method = RequestMethod.DELETE)
    public void deletePet(@PathVariable("petId") String petId) {
        this.petService.deletePet(petId);
    }

    @RequestMapping(value = "/{petId}", method = RequestMethod.PUT)
    public void updatePet(@PathVariable("petId") String petId, @RequestBody Pet pet) {
        pet.setPetId(petId);
        this.petService.updatePet(pet);
    }

}
