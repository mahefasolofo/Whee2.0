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

    @GetMapping("/annonces/{idCovoit}")
    public Covoiturage getById(@PathVariable Long idCovoit){return covoiturageRepository.findById(idCovoit).orElseThrow();}

    @PostMapping("/annonces")
    public Covoiturage createAnnonce(@RequestBody Covoiturage annonce) {

        return covoiturageRepository.save(annonce);
    }

    @GetMapping("/annonces/{idCovoit}")
    public List<Covoiturage> getById(@PathVariable Long idCovoit) {
        return covoiturageRepository.findCById(idCovoit);
    }

    @GetMapping("/espaceperso/{id_covoitureur}")
    public List<Covoiturage> findTout(@PathVariable Long id_covoitureur) {
        return covoiturageRepository.findCovoitById(id_covoitureur);
    }

    @GetMapping("/events/{id}")
    public List<Covoiturage> getCovoitEvent(@PathVariable Long id) {
        return covoiturageRepository.findEventCovoitById(id);
    }
    // @GetMapping("/findByIdCovoit/{id}")
    // public List<Covoiturage> findByCovoitureur(Long id){return
    // covoiturageRepository.findByCovoitureur(id);}
    // // ne fonctionne pas encore : Mahefa

    // @GetMapping("/findCovoitByIdCovoit/{id_covoitureur}")
    // public List<Covoiturage> findTout(@PathVariable Long id_covoitureur){return
    // covoiturageRepository.findCovoitById(id_covoitureur);}

}
