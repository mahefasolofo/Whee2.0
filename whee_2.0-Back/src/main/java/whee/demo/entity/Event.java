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
@Table(name="Event")
public class Event implements Serializable {

	@Column(name="ID", nullable=false)	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idEvent;
	
	@Column(name="Titre", nullable=true, length=255)	
	private String titre;
	
	@Column(name="LieuEvent", nullable=true, length=255)	
	private String lieuEvent;
	
	@Column(name="HeureEvent", nullable=true, columnDefinition = "TIME")
	private String heureEvent;
	
	@Column(name="DateEvent", nullable=true)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String dateEvent;

	@Column(name="Description")
	private String description;
	
	@ManyToMany(targetEntity=Category.class)	
	@org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE, org.hibernate.annotations.CascadeType.LOCK})	
	@JoinTable(name="Event_Category2", joinColumns={ @JoinColumn(name="EventID") }, inverseJoinColumns={ @JoinColumn(name="CategoryID") })	
	@org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)	
	private List<Category> categories;
	

}
