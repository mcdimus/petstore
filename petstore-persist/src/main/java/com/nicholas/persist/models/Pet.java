package com.nicholas.persist.models;

import com.nicholas.common.enums.PetType;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * Created by Nicholas Azar on March 06, 2017.
 */
@Data
public class Pet extends Auditable {
    @Id
    private String petId;

    private PetType petType;
    private String name;
    private Date birthDate;

    public Pet() {}

    public Pet(String petId, PetType petType, String name) {
        this.petId = petId;
        this.petType = petType;
        this.name = name;
        this.birthDate = new Date();
    }
}
