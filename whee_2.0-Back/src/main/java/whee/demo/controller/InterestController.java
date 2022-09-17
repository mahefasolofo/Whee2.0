package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import whee.demo.entity.Interest;
import whee.demo.entity.User;
import whee.demo.repository.InterestRepository;
import whee.demo.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins ="http://localhost:3000/" )
@RestController
@RequestMapping("/api/whee/")
public class InterestController {
    @Autowired
    InterestRepository interestRepository;

    @GetMapping("/getInterest")
    public List<Interest> getAllCompte() {
        return interestRepository.findAll();
    }
}
