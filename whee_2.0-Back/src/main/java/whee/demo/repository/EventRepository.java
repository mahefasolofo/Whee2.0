package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import whee.demo.entity.Covoiturage;
import whee.demo.entity.Event;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Long> {


    @Query(value="select * from public.event e where e.userid= :userid", nativeQuery=true)
    List<Event> findEventByUserId(Long userid);
}
