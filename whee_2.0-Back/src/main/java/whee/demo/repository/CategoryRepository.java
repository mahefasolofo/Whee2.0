package whee.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import whee.demo.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
