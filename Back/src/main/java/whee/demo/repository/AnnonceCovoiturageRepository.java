package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import whee.demo.entity.AnnonceCovoiturage;
@Repository
public interface AnnonceCovoiturageRepository extends JpaRepository<AnnonceCovoiturage,Long>{
    
}
