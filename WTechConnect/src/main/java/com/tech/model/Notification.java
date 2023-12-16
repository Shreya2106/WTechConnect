package com.tech.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Notification")
public class Notification implements java.io.Serializable{
	private static final long serialVersionUID = 1L; 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "notifId")
	private int notifId;
	@Column(name="msg")
	private String msg;

	public int getNotifId() {
		return notifId;
	}

	public void setNotifId(int notifId) {
		this.notifId = notifId;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Notification(String msg) {
		super();
		this.msg = msg;
	}

	public Notification() {
		super();
	}
}