package whee.demo.entity;

/**
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

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@org.hibernate.annotations.Proxy(lazy = false)
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("Conducteur")
public class Conducteur extends Covoitureur implements Serializable {

	@OneToMany(targetEntity = Vehicule.class)
	@org.hibernate.annotations.Cascade({ org.hibernate.annotations.CascadeType.SAVE_UPDATE,
			org.hibernate.annotations.CascadeType.LOCK })
	@org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)
	private List<Vehicule> vehicules;

	@OneToMany(mappedBy = "conducteur", targetEntity = Evaluation.class)
	@org.hibernate.annotations.Cascade({ org.hibernate.annotations.CascadeType.SAVE_UPDATE,
			org.hibernate.annotations.CascadeType.LOCK })
	@org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)
	private List<Evaluation> evaluations;

}
