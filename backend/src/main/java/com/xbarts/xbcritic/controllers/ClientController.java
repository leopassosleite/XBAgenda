package com.xbarts.xbcritic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xbarts.xbcritic.entities.Client;
import com.xbarts.xbcritic.repositories.ClientRepository;
import com.xbarts.xbcritic.services.exceptions.ResourceNotFoundException;

@CrossOrigin("origins = http://localhost:3000")
@RestController
@RequestMapping(value = "/clients")
public class ClientController {

	@Autowired
	private ClientRepository clientRepository;

	@GetMapping
	public List<Client> getAllClients() {
		return clientRepository.findAll();
	}

	@PostMapping
	public Client insertClient(@RequestBody Client client) {
		return clientRepository.save(client);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Client> getClientId(@PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Não existe cliente com o id: "  + id));
				return ResponseEntity.ok(client);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Client> updateClient (@PathVariable Long id, @RequestBody Client clientDetails) {
		Client updateClient = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Não existe cliente com o id:"  + id));
		
		updateClient.setName(clientDetails.getName());
		updateClient.setCompany(clientDetails.getCompany());
		updateClient.setEmail(clientDetails.getEmail());
		updateClient.setPhone(clientDetails.getPhone());
		
		clientRepository.save(updateClient);
		
		return ResponseEntity.ok(updateClient);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteClient(@PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Não existe cliente com o id:" + id));
		clientRepository.delete(client);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}