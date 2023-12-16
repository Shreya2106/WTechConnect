package com.tech.model;

import java.io.Serializable;

/*Model Class for handling the token*/
public class JwtModel implements Serializable {

	private static final long serialVersionUID = 1L;
	private final String jwtToken;

	public String getJwtToken() {
		return jwtToken;
	}
	public JwtModel(String jwtToken) {
		this.jwtToken = jwtToken;
	}

}
