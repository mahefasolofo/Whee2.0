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

@Entity
@Data

@org.hibernate.annotations.Proxy(lazy = false)
@Table(name = "Evaluation")
public class Evaluation implements Serializable {

	@Column(name = "ID", nullable = false)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idEval;

	@ManyToOne(targetEntity = Conducteur.class, fetch = FetchType.LAZY)
	@org.hibernate.annotations.Cascade({
			org.hibernate.annotations.CascadeType.LOCK })
	@JoinColumns({ @JoinColumn(name = "UserID2", referencedColumnName = "ID", nullable = false) })
	@org.hibernate.annotations.LazyToOne(value = org.hibernate.annotations.LazyToOneOption.NO_PROXY)
	private Conducteur conducteur;

	@Column(name = "Note", nullable = false)
	private int note;

}
