package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import whee.demo.entity.Covoiturage;

import java.util.List;

@Repository
public interface CovoiturageRepository extends JpaRepository<Covoiturage,Long> {


   

}
