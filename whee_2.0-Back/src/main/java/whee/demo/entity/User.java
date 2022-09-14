package whee.demo.entity; /**
 * "Visual Paradigm: DO NOT MODIFY THIS FILE!"
 * 
 * This is an automatic generated file. It will be regenerated every time 
 * you generate persistence class.
 * 
 * Modifying its content may cause the program not work, or your work may lost.
 */

/**
 * Licensee: Faculty of informatics, Burapha University 01
 * License Type: Purchased
 */

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@org.hibernate.annotations.Proxy(lazy=false)
@Table(name="`User`")
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="Discriminator", discriminatorType=DiscriminatorType.STRING)
@DiscriminatorValue("User")
public class User implements Serializable {

	@Column(name="ID", nullable=false)	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idUser;
	
	@Column(name="Nom", nullable=true, length=255)	
	private String nom;
	
	@Column(name="Prenom", nullable=true, length=255)	
	private String prenom;
	
	@Column(name="Mail", nullable=true, length=255)	
	private String mail;
	
	@Column(name="Password", nullable=true, length=255)	
	private String password;
	
	@Column(name="Genre", nullable=true, length=255)	
	private String genre;
	
	@Column(name="Adresse", nullable=true, length=255)	
	private String adresse;
	
	@Column(name="Contact", nullable=true, length=255)	
	private String contact;
	
	@Column(name="Photo", nullable=true, length=255)	
	private String photo;
	
	@Column(name="Date_naissance")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String date_naissance;
	
	@ManyToMany(targetEntity= Interest.class)
	@org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE, org.hibernate.annotations.CascadeType.LOCK})	
	@JoinTable(name="User_Interests2", joinColumns={ @JoinColumn(name="UserID") }, inverseJoinColumns={ @JoinColumn(name="InterestsID") })	
	@org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)	
	private List<Interest> interests;

}
