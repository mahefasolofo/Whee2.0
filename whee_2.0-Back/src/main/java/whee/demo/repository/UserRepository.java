package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import whee.demo.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
