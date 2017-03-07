package com.nicholas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class PetstoreApplication { // implements CommandLineRunner

	public static void main(String[] args) {
		SpringApplication.run(PetstoreApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//
//		// save a couple of customers
//		Pet pet = new Pet(1L, PetType.Dog, "George");
//		petRepository.save(pet);
//		System.out.println("Pet saved");
//	}
}