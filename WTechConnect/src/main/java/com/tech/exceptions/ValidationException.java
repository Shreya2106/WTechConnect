package com.tech.exceptions;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

public class ValidationException extends ConstraintViolationException {
	private static final long serialVersionUID = 1L;
	private final List<String> message = new ArrayList<>();
	public ValidationException(Set<? extends ConstraintViolation<?>> constraintViolations) {
		super(constraintViolations);
		for(ConstraintViolation<?> cv:constraintViolations) {
			message.add(cv.getMessage());
		}
	}

	public List<String> getMessages() {
		return this.message;
	}
}