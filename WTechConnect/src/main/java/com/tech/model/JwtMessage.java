package com.tech.model;

import java.io.Serializable;

/*Model Class for handling the token*/
public class JwtMessage implements Serializable {

	private static final long serialVersionUID = 1L;
	private final String message;

	public String getMessage() {
		return message;
	}
	public JwtMessage(String message) {
		this.message = message;
	}

}