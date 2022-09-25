package whee.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import whee.demo.entity.Demande;

@Repository
public interface DemandeRepository extends JpaRepository<Demande, Long> {

    @Query(value = "SELECT * FROM public.demande WHERE covoitureur_id=?1", nativeQuery = true)
    List<Demande> findDemandeById(@Param("id_covoit") Long id_covoit);

    @Query(value = "SELECT c.id, date_covoit, heure_covoit, pt_arrivee, pt_depart, eventid, nb_personne, covoitureur_id FROM public.demande c INNER JOIN public.event e ON e.id = c.eventid WHERE e.id=?1", nativeQuery = true)

    List<Demande> findEventCovoitById(@Param("idEvent") Long idEvent);

    @Query(value = "SELECT c.id, date_covoit, heure_covoit, pt_arrivee, pt_depart, eventid, nb_personne, covoitureur_id FROM public.demande c INNER JOIN public.user u ON u.id = c.covoitureur_id WHERE c.id=?1", nativeQuery = true)
    List<Demande> findCById(@Param("idCovoit") Long idCovoit);
}
