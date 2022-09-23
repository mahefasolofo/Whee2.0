package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import whee.demo.entity.Event;
import whee.demo.entity.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value="select * from public.user u where u.mail= :usermail ", nativeQuery=true)
    List<User> findByMail(@Param("usermail")String usermail);


    @Query(value="select id from public.user u where u.mail= :usermail ", nativeQuery=true)
    Long findIDByMail(@Param("usermail")String usermail);


}
