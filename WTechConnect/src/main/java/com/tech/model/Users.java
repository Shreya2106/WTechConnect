package com.tech.model;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@Table(name = "Users")
public class Users implements java.io.Serializable{
	private static final long serialVersionUID = 1L; 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userId")
	private int userId;
	@Column(name = "email")
	@NotEmpty(message="Email cannot be empty")
	private String email;
	@Column(name="password", columnDefinition = "varchar(255) default \"userC123#\"")
	@Password(message="Password must be of atleast 8 characters & a combination of lowercase,uppercase,number & special character")
	private String password;
	@Column(name = "contactNumber")
	@Contact(message="Contact Number is not valid. It must begin with either 6/7/8/9 and contain 10 digits.")
	private String contactNo;
	@Column(name = "userName")
	private String name;
	@Column(name="role")
	private String role;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToOne(cascade = CascadeType.MERGE)
	private Skill skillId;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToOne(cascade = CascadeType.MERGE)
	private Location locationId;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToOne(cascade = CascadeType.MERGE)
	private Industry industryId;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToOne(cascade = CascadeType.MERGE)
	private Notification notifId;

	public Notification getNotifId() {
		return notifId;
	}

	public void setNotifId(Notification notifId) {
		this.notifId = notifId;
	}

	public Users(int userId, String email, String password, String contactNo, String name, String role,Skill skillSet,
			Location locationSet, Industry industrySet) {
		super();
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.contactNo = contactNo;
		this.name = name;
		this.role="ROLE_USER";
		this.skillId = skillSet;
		this.locationId = locationSet;
		this.industryId = industrySet;
	}

	public Users() {
		super();
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}

