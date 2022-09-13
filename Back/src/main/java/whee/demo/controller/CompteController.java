package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import whee.demo.entity.AnnonceCovoiturage;
import whee.demo.entity.Compte;
import whee.demo.repository.AnnonceCovoiturageRepository;
import whee.demo.repository.CompteRepository;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3001", "http://localhost:3000"}, allowCredentials = "true")
@RestController
@RequestMapping("/Compte")
public class CompteController {
    @Autowired
    private CompteRepository compteRepository;

    //get all annonce
    @PostMapping("/getCompte")
    public List<Compte> getAllComptes(){
        return compteRepository.findAll();
    }
}
