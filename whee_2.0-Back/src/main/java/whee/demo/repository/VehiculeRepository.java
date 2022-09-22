package whee.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import whee.demo.entity.Vehicule;

@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule,Integer> {

    //findById
    @Query(value = "SELECT * FROM vehicule v WHERE v.userid=?1", nativeQuery = true)
    List<Vehicule> findByUserId(@Param("userid") Long userid);


}
