package whee.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import whee.demo.entity.Covoiturage;

@Repository
public interface CovoiturageRepository extends JpaRepository<Covoiturage, Long> {


    @Query(value = "SELECT * FROM public.covoiturage WHERE covoitureur_id=?1", nativeQuery = true)
    List<Covoiturage> findCovoitById(@Param("id_covoit") Long id_covoit);

    @Query(value="SELECT c.id, date_covoit, heure_covoit, nb_place, pt_arrivee, pt_depart, tarif, eventid, vehiculeid, image_covoit, covoitureur_id FROM public.covoiturage c INNER JOIN public.event e ON e.id = c.eventid WHERE e.id= :idEvent", nativeQuery = true)
    List<Covoiturage> findEventCovoitById(@Param("idEvent") Long idEvent);

}
