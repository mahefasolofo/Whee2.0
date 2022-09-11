package whee.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import whee.demo.entity.AnnonceCovoiturage;
import whee.demo.exception.ResourceNotFoundException;
import whee.demo.repository.AnnonceCovoiturageRepository;
@CrossOrigin(origins ="http://localhost:3001" )
@RestController
@RequestMapping("/api/whee/")
public class AnnonceCovoiturageController {
    @Autowired
    private AnnonceCovoiturageRepository annonceCovoiturageRepository;

    //get all annonce
    @GetMapping("/annonces")
    public List<AnnonceCovoiturage> getAllAnnonce(){
        return annonceCovoiturageRepository.findAll();
    }
    //creat annonce
    @PostMapping("/annonces")
    public AnnonceCovoiturage createAnnonce(@RequestBody AnnonceCovoiturage annonce ){
        return annonceCovoiturageRepository.save(annonce);
    }
    //get annonce by id
    @GetMapping("/annonces/{id}")
    public ResponseEntity<AnnonceCovoiturage> getAnnonceById(@PathVariable Long id){
        AnnonceCovoiturage annonceCovoiturage = annonceCovoiturageRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Annonce introuvalble"));
        return ResponseEntity.ok(annonceCovoiturage);
    }

    //update annonce
   @PutMapping("/annonces/{id}")
    public ResponseEntity<AnnonceCovoiturage> updateAnnonceById(@PathVariable Long id,@RequestBody AnnonceCovoiturage annonceCovoiturageD){
        AnnonceCovoiturage annonceCovoiturage = annonceCovoiturageRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Annonce introuvalble"));

        annonceCovoiturage.setCompte(annonceCovoiturageD.getCompte());
        annonceCovoiturage.setComptes(annonceCovoiturageD.getComptes());
        annonceCovoiturage.setDateCovoiturage(annonceCovoiturageD.getDateCovoiturage());
        annonceCovoiturage.setEvenement(annonceCovoiturageD.getEvenement());
        annonceCovoiturage.setHeureDepart(annonceCovoiturageD.getHeureDepart());
        annonceCovoiturage.setIdCovoiturage(annonceCovoiturageD.getIdCovoiturage());
        annonceCovoiturage.setLieuArriver(annonceCovoiturageD.getLieuArriver());
        annonceCovoiturage.setLieuDepart(annonceCovoiturageD.getLieuDepart());
        annonceCovoiturage.setNbPassage(annonceCovoiturageD.getNbPassage());
        annonceCovoiturage.setTarif(annonceCovoiturageD.getTarif());
        annonceCovoiturage.setVehicule(annonceCovoiturageD.getVehicule());

        AnnonceCovoiturage updatedAnnonce = annonceCovoiturageRepository.save(annonceCovoiturage);
        return ResponseEntity.ok(updatedAnnonce);

    }

}
