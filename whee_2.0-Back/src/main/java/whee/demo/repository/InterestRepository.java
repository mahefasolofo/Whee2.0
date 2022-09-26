package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import whee.demo.entity.Interest;


import java.util.List;

public interface InterestRepository extends JpaRepository<Interest, Long> {
    @Query(value="SELECT i.id, nomci, imageci, categoryid FROM public.interests i INNER JOIN public.user_interests2 ui ON ui.interestsid=i.id WHERE ui.userid=?1", nativeQuery = true)
    List<Interest> findByUserId(@Param("userId")Long userId);

}
