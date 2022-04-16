package com.xbarts.xbcritic.dto;

import java.time.Instant;

import com.xbarts.xbcritic.entities.Client;

public class ClientDTO {
	private Long id;
	private String name;
	private String company;
	private String email;
	private String phone;
	private String category;
	private Instant moment;
	
	public ClientDTO() {
	}

	public ClientDTO(Long id, String name, String company, String email, String phone, String category, Instant moment) {
		this.id = id;
		this.name = name;
		this.company = company;
		this.email = email;
		this.phone = phone;
		this.category = category;
		this.moment = moment;
	}
	
	public ClientDTO(Client client) {
		id = client.getId();
		name = client.getName();
		company = client.getCompany();
		email = client.getEmail();
		phone = client.getPhone();
		category = client.getCategory();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}
}
