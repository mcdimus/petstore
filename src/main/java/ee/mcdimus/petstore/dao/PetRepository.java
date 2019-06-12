package ee.mcdimus.petstore.dao;

import ee.mcdimus.petstore.model.Pet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Nicholas Azar on March 06, 2017.
 */
@Repository
public interface PetRepository extends MongoRepository<Pet, String> {
}
