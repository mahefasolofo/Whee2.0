package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import whee.demo.entity.Event;
import whee.demo.entity.User;
import whee.demo.exception.ResourceNotFoundException;
import whee.demo.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3001", "http://localhost:3000" }, allowCredentials = "true")
@RestController
@RequestMapping("/api/whee/")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/newCompte")
    public List<User> getAllCompte() {
        return userRepository.findAll();
    }

    @PostMapping("/newCompte")
    public User createCompte(@RequestBody User user) {
        return userRepository.save(user);
    }
    @GetMapping("/findUserById/{id}")
    public User findUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow();
    }
    @GetMapping("/findUserByMail/{userEmail}")
    public List<User> findAllUserByMail(@PathVariable String userEmail) {
        return userRepository.findByMail(userEmail);
    }
    @GetMapping("/findIdByMail/{userEmail}")
    public Long findIdByMail(@PathVariable String userEmail) {
        return userRepository.findIDByMail(userEmail);
    }

}
