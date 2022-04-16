package com.xbarts.xbcritic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xbarts.xbcritic.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
