package com.example.user.userbacked.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.example.user.userbacked.entities.User;

public interface UserRepository extends CrudRepository<User, Long>{

    Page<User> findAll(Pageable pageable);
}
