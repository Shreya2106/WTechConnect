package com.tech.exceptions;

public class NoSuchUserException extends RuntimeException
	{
		private static final long serialVersionUID = 1L;
		private final String errorMsg;
		public NoSuchUserException(String message)
		{
			this.errorMsg=message;
		}

		@Override
		public String getMessage() {
			return errorMsg;
		}

}