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
    List<Covoiturage> findAndrana(@Param("nb_place") Long id_covoit);

    // @Query(value="select * from public.covoiturage c where c.covoitureur_id=
    // :id_covoit", nativeQuery=true)
    // List<Covoiturage> findTout(Long id_covoit);
    //
    // @Query(value="select * from public.covoiturage a where a.covoitureur_id=
    // :id_covoit", nativeQuery=true)
    // List<Covoiturage> getTout(Long id_covoit);

    // @Query(value="SELECT * FROM public.covoiturage WHERE
    // covoitureur_id=2",nativeQuery = true)
    // List<Covoiturage> findDaholo();
}
