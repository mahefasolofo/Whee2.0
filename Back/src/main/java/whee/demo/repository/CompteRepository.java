package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import whee.demo.entity.Compte;

@Repository
public interface CompteRepository extends JpaRepository<Compte, Integer> {
}
