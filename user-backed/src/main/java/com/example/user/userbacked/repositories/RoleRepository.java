package com.example.user.userbacked.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.user.userbacked.entities.Role;

public interface RoleRepository extends CrudRepository<Role, Long>{

    Optional<Role> findByName(String name);

}
