package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;

public interface UserService extends UserDetailsService {

    List<User> getAllUsers();

    void saveUser(User user);

    User getUserByName(String name);

    public User getUserByEmail(String email);

    User getUser(Long id);

    void updateUser(User updateUser);

    void deleteUser(Long id);
}
