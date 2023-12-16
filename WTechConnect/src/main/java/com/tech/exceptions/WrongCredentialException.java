package com.tech.exceptions;

public class WrongCredentialException extends Exception {

	private static final long serialVersionUID = 1L;
	
	private final String message;

	public String getMessage() {
		return message;
	}
	
	public WrongCredentialException(String message) {
		this.message = message;
	}

}
