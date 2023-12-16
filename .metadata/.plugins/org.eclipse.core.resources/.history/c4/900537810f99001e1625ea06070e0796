package com.tech.controllers;

import javax.validation.ConstraintViolationException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tech.exceptions.ValidationException;
import com.tech.model.Leaders;
import com.tech.model.Users;
import com.tech.services.LeadersServicesImpl;
import com.tech.services.UserServiceImpl;

@CrossOrigin("*")
@RequestMapping(value="/common",method=RequestMethod.POST)
@RestController
public class RegistrationController {
	@Autowired
	UserServiceImpl userServ;
	@Autowired
	LeadersServicesImpl leadServ;
	private static final Logger LOGGER=LoggerFactory.getLogger(RegistrationController.class);
	/*Mapping for registering a new user*/
	@PostMapping("/registerUser")
	public Users addUser(@RequestBody Users user) {
		try{
			user.setRole("ROLE_USER");
			userServ.addUser(user);
			LOGGER.info("************\n\nUser Registration Successful!!");
			return user;
		}
		catch(ConstraintViolationException e) {
			LOGGER.info("************\n\nOops! There is a validation exception.");
			throw new ValidationException(e.getConstraintViolations());
		}
	}
	/*Mapping for registering a new Leader*/
	@PostMapping("/registerleader")
	public Leaders addLeader(@RequestBody Leaders lead) {
		lead.setRole("ROLE_LEADER");
		leadServ.addLeader(lead);
		LOGGER.info("************\n\nLeader is registered successfully.");
		return lead;
	}

}