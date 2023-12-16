package com.tech.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;


@Entity
@Table(name = "Post")
public class Post implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "postId")
	private int id;
	@Column(name = "postTitle")
	private String title;
	@Column(name = "postDesc")
	private String desc;
	@LazyCollection(LazyCollectionOption.FALSE)
	@ManyToOne(cascade = CascadeType.MERGE)
	private Leaders createdBy;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Leaders getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Leaders createdBy) {
		this.createdBy = createdBy;
	}

	public Post(int id, String title, String desc, Leaders createdBy) {
		super();
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.createdBy = createdBy;
	}

	public Post() {
		super();
	}	

}
