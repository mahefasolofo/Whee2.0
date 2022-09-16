package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import whee.demo.entity.Covoiturage;

@Repository
public interface CovoiturageRepository extends JpaRepository<Covoiturage,Long> {

   

}
