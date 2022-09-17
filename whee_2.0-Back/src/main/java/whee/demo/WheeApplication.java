package whee.demo;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import whee.demo.entity.Covoiturage;
import whee.demo.services.CovoiturageService;
// import whee.demo.entity.User;
// import whee.demo.repository.UserRepository;

// import javax.annotation.PostConstruct;

@SpringBootApplication
public class WheeApplication {

	public static void main(String[] args) {
		SpringApplication.run(WheeApplication.class, args);

	}
	// @Autowired
	// private UserRepository userRepository;
//	@Autowired
//	private CovoiturageService covoiturageService;
	// @PostConstruct
	// private void postConstruct() {
	// User admin = new User();
	// admin.setNom("joel");
	// admin.setPrenom("joem");

	// userRepository.save(admin);
	// }

}
