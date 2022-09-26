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
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@org.hibernate.annotations.Proxy(lazy = false)
@Table(name = "Demande")
public class Demande implements Serializable {

	@Column(name = "ID", nullable = false)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idDemande;

	@ManyToOne(targetEntity = Event.class, fetch = FetchType.LAZY)
	@org.hibernate.annotations.Cascade({ org.hibernate.annotations.CascadeType.LOCK })
	@JoinColumns({ @JoinColumn(name = "eventid", referencedColumnName = "id") })
	@org.hibernate.annotations.LazyToOne(value = org.hibernate.annotations.LazyToOneOption.NO_PROXY)
	private Event event;

	@Column(name = "PtDepart", nullable = true, length = 255)
	private String ptDepart;

	@Column(name = "PtArrivee", nullable = true, length = 255)
	private String ptArrivee;

	@Column(name = "HeureCovoit", nullable = true, columnDefinition = "TIME")
	private LocalTime heureCovoit;

	@Column(name = "DateCovoit", nullable = true)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date dateCovoit;

	@Column(name = "nbPersonne", nullable = false)
	private int nbPersonne;

	@ManyToOne
	private Covoitureur covoitureur;

}
