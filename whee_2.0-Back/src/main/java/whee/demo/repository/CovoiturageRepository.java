package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import whee.demo.entity.Covoiturage;

import java.util.List;

@Repository
public interface CovoiturageRepository extends JpaRepository<Covoiturage,Long> {


    @Query(value = "SELECT id FROM public.covoiturage WHERE covoitureur_id= :id", nativeQuery = true)
    List<Covoiturage> findByCovoitureur(@Param("id")Long id);
//   ne fonctionne pas encore : Mahefa

}
