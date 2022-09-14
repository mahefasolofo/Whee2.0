package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import whee.demo.entity.Covoiturage;
import whee.demo.repository.CovoiturageRepository;

import java.util.List;

@CrossOrigin(origins ="http://localhost:3000/" )
@RestController
@RequestMapping("/api/whee/")
public class CovoiturageController {

    @Autowired
    private CovoiturageRepository covoiturageRepository;

    @GetMapping("/annonces")
    public List<Covoiturage> getAllAnnonce(){
        return covoiturageRepository.findAll();
    }
}
