package com.tech.exceptions;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/*Centralized Exceptional Handling for all request mappings*/
@ControllerAdvice
public class GlobalExceptionHandlers extends ResponseEntityExceptionHandler{
	/*Handling the NoSuchUserException*/
	@ExceptionHandler(value= NoSuchUserException.class)
	public ResponseEntity<String> noSuchUserhandleException(NoSuchUserException ex){
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.BAD_REQUEST);
	}
	/*Handling the AlreadyFollowingException*/
	@ExceptionHandler(value= AlreadyFollowingException.class)
	public ResponseEntity<String> alreadyFollowingException(AlreadyFollowingException ex){
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.BAD_REQUEST);
	}
	/*Handling the ConstraintViolationException*/
	@ExceptionHandler(value= ConstraintViolationException.class)
    protected ResponseEntity<Object> handleValidationException(ValidationException ex) {
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.BAD_REQUEST);
    }
	/*Handling the WrongCredentialException*/
	@ExceptionHandler(value= WrongCredentialException.class)
	public ResponseEntity<String> wrongCredException(WrongCredentialException ex){
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.BAD_REQUEST);
	}
}
