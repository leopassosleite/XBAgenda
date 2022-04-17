package com.xbarts.xbcritic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xbarts.xbcritic.entities.Category;
import com.xbarts.xbcritic.repositories.CategoryRepository;
import com.xbarts.xbcritic.services.exceptions.ResourceNotFoundException;

@CrossOrigin("origins = http://localhost:3000")
@RestController
@RequestMapping(value = "/categories")
public class CategoryController {

	@Autowired
	private CategoryRepository clientRepository;

	@GetMapping
	public List<Category> getAllCategorys() {
		return clientRepository.findAll();
	}

	@PostMapping
	public Category insertCategory(@RequestBody Category client) {
		return clientRepository.save(client);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Category> getCategoryId(@PathVariable Long id) {
		Category client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Não existe categoria com o id: "  + id));
				return ResponseEntity.ok(client);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Category> updateCategory (@PathVariable Long id, @RequestBody Category clientDetails) {
		Category updateCategory = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Não existe categoria com o id:"  + id));
		
		updateCategory.setName(clientDetails.getName());
		
		clientRepository.save(updateCategory);
		
		return ResponseEntity.ok(updateCategory);
	}
}