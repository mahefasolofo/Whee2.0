package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import whee.demo.entity.Demande;
import whee.demo.repository.DemandeRepository;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3001", "http://localhost:3000" }, allowCredentials = "true")
@RestController
@RequestMapping("/api/whee/")
public class DemandeController {

    @Autowired
    private DemandeRepository demandeRepository;

    @GetMapping("/demandes")
    public List<Demande> getAllDemande() {
        return demandeRepository.findAll();
    }

    @PostMapping("/demandes")
    public Demande createDemande(@RequestBody Demande demande) {

        return demandeRepository.save(demande);
    }

    @GetMapping("/demandes/{idCovoit}")
    public List<Demande> getDemandeById(@PathVariable Long idCovoit) {
        return demandeRepository.findCById(idCovoit);
    }

    @GetMapping("/espaceperso/demandes/{id_covoitureur}")
    public List<Demande> findDemandeTout(@PathVariable Long id_covoitureur) {
        return demandeRepository.findDemandeById(id_covoitureur);
    }

    @GetMapping("/events/demandes/{id}")
    public List<Demande> getDemandeEvent(@PathVariable Long id) {
        return demandeRepository.findEventCovoitById(id);
    }
    // @GetMapping("/findByIdCovoit/{id}")
    // public List<Demande> findByCovoitureur(Long id){return
    // demandeRepository.findByCovoitureur(id);}
    // // ne fonctionne pas encore : Mahefa

    // @GetMapping("/findCovoitByIdCovoit/{id_covoitureur}")
    // public List<Demande> findTout(@PathVariable Long id_covoitureur){return
    // demandeRepository.findCovoitById(id_covoitureur);}

}
