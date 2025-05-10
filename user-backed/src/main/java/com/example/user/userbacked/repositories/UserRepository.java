package com.example.user.userbacked.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.user.userbacked.entities.User;

public interface UserRepository extends CrudRepository<User, Long>{

}
