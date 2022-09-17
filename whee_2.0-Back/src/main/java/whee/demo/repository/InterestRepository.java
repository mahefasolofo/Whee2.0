package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import whee.demo.entity.Interest;

public interface InterestRepository extends JpaRepository<Interest, Long> {

}
