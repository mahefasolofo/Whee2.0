package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import whee.demo.entity.Covoiturage;
import whee.demo.repository.CovoiturageRepository;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3001", "http://localhost:3000" }, allowCredentials = "true")
@RestController
@RequestMapping("/api/whee/")
public class CovoiturageController {

    @Autowired
    private CovoiturageRepository covoiturageRepository;

    @GetMapping("/annonces")
    public List<Covoiturage> getAllAnnonce() {
        return covoiturageRepository.findAll();
    }

    @PostMapping("/annonces")
    public Covoiturage createAnnonce(@RequestBody Covoiturage annonce) {
        return covoiturageRepository.save(annonce);
    }

    @GetMapping("/findCovoitByIdCovoit/{id_covoitureur}")
    public List<Covoiturage> findTout(@PathVariable Long id_covoitureur){return covoiturageRepository.findAndrana(id_covoitureur);}

}
