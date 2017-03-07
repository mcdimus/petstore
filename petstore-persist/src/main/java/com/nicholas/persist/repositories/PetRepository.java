package com.nicholas.persist.repositories;

import com.nicholas.persist.models.Pet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Nicholas Azar on March 06, 2017.
 */
@Repository
public interface PetRepository extends MongoRepository<Pet, String> {}
