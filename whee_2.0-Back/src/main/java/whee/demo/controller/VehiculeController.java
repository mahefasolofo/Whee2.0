package whee.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import whee.demo.entity.Vehicule;
import whee.demo.repository.VehiculeRepository;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3001", "http://localhost:3000" }, allowCredentials = "true")
@RestController
@RequestMapping("/api/whee/")
public class VehiculeController {

    @Autowired
    VehiculeRepository vehiculeRepository;

    @GetMapping("/vehicules")
    public List<Vehicule> getAllVehicules(){
        return vehiculeRepository.findAll();
    }

    @PostMapping("/vehicules")
    public Vehicule createCompte(@RequestBody Vehicule vehicule) {
        return vehiculeRepository.save(vehicule);
    }

    @GetMapping("/vehicules/{userid}")
    public List<Vehicule> getVehiculeById(@PathVariable Long userid) {
        return vehiculeRepository.findByUserId(userid);
    }



}
