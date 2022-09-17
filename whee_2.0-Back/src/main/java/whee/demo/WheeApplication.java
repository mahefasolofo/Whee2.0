package whee.demo;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import whee.demo.entity.Category;
import whee.demo.entity.Interest;
import whee.demo.repository.CategoryRepository;
import whee.demo.repository.InterestRepository;

import javax.annotation.PostConstruct;

// import whee.demo.entity.User;
// import whee.demo.repository.UserRepository;

// import javax.annotation.PostConstruct;

@SpringBootApplication
public class WheeApplication {

	public static void main(String[] args) {
		SpringApplication.run(WheeApplication.class, args);

	}



}
