package com.xbarts.xbcritic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xbarts.xbcritic.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}