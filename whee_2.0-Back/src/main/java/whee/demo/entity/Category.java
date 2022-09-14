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

import javax.persistence.*;
import java.io.Serializable;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@org.hibernate.annotations.Proxy(lazy=false)
@Table(name="Category")
public class Category implements Serializable {
	
	@Column(name="ID", nullable=false)	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idCateg;
	
	@Column(name="NomCateg", nullable=true, length=255)	
	private String nomCateg;
	
}
