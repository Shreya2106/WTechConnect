package com.tech.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;


@Entity
@Table(name = "Leaders")
public class Leaders implements java.io.Serializable{
	private static final long serialVersionUID = 1L; 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "leaderId")
	private int leaderId;
	@Column(name = "leaderName")
	private String leaderName;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name = "contactNumber")
	private String contactNo;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToOne(cascade = CascadeType.MERGE)
	private Skill skillId;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToOne(cascade = CascadeType.MERGE)
	private Location locationId;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToOne(cascade = CascadeType.MERGE)
	private Industry industryId;

	@Column(name="role")
	private String role;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToOne(cascade = CascadeType.MERGE)
	private Notification notifId;

	public Notification getNotifId() {
		return notifId;
	}

	public void setNotifId(Notification notifId) {
		this.notifId = notifId;
	}

	public Leaders(int id, String contactNo,String email, String password,String name,String role,Skill skillSet,
			Location locationSet, Industry industrySet) {
		super();
		this.leaderId = id;
		this.leaderName = name;
		this.email = email;
		this.password = password;
		this.contactNo = contactNo;
		this.role="ROLE_LEADER";
		this.skillId = skillSet;
		this.locationId = locationSet;
		this.industryId = industrySet;
	}

	public Leaders(int id, String contactNo,String email, String name,String role) {
		super();
		this.leaderId = id;
		this.leaderName = name;
		this.email = email;
		this.contactNo = contactNo;
		this.role=role;
	}
	public void setRole(String role) {
		this.role = role;
	}

	public Leaders() {
		super();
	}

	public int getLeaderId() {
		return this.leaderId;
	}

	public void setLeaderId(int id) {
		this.leaderId = id;
	}

	public String getLeaderName() {
		return this.leaderName;
	}

	public void setName(String name) {
		this.leaderName = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public Skill getSkillId() {
		return skillId;
	}

	public void setSkillId(Skill skillId) {
		this.skillId = skillId;
	}

	public Location getLocationId() {
		return locationId;
	}

	public void setLocationId(Location locationId) {
		this.locationId = locationId;
	}

	public Industry getIndustryId() {
		return industryId;
	}

	public void setIndustryId(Industry industryId) {
		this.industryId = industryId;
	}

	public String getRole() {
		return this.role;
	}

}