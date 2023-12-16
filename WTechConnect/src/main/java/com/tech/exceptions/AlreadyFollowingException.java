package com.tech.exceptions;

public class AlreadyFollowingException extends RuntimeException
{
	private static final long serialVersionUID = 1L;
	private final String errorMsg;
	public AlreadyFollowingException(String message)
	{
		this.errorMsg=message;
	}

	@Override
	public String getMessage() {
		return errorMsg;
	}

}
