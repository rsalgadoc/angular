package com.example.user.userbacked.services;

import java.util.List;
import java.util.Optional;

import org.springframework.lang.NonNull;

import com.example.user.userbacked.entities.User;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(@NonNull Long id);

    User save(User user);

    void deleteById(Long id);
}
