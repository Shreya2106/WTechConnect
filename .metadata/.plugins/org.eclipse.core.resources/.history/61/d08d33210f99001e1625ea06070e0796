package com.tech.controllers;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tech.exceptions.NoSuchUserException;
import com.tech.model.Leaders;
import com.tech.model.Users;
import com.tech.services.FollowServiceImpl;
import com.tech.services.LeadersServicesImpl;
import com.tech.services.UserServiceImpl;

@CrossOrigin("*")
@RequestMapping("/user/common")
@RestController
public class AuthCommonController {
	private static final Logger LOGGER=LoggerFactory.getLogger(AuthCommonController.class);
	@Autowired
	LeadersServicesImpl leadServ;
	@Autowired
	UserServiceImpl userServ;
	@Autowired
	FollowServiceImpl fServ;
	/*Mapping for fetching All Leaders*/
	@RequestMapping("/viewAllLeaders")
	public List<Leaders> getLeaders(){
		return leadServ.viewAll();
	}
	/*Mapping for fetching a particular Leader by its id*/
	@RequestMapping("/viewLeaderById/{leadId}")
	public Leaders getLeader(@PathVariable("leadId") int leaderId) {
		Optional<Leaders> lead = leadServ. getLeaderById(leaderId);
		if(lead.isPresent()) return lead.get();
		throw new NoSuchUserException("No Such Leader Exists");
	}
	/*Mapping for fetching the list of Leader by their skill*/
	@RequestMapping("/viewLeaderBySkill/{skillId}")
	public List<Leaders> getLeaderBySkill(@PathVariable("skillId") String skillId) {
		return leadServ. getLeadersBySkill(skillId);
	}
	/*Mapping for fetching the list of Leader by their industry*/
	@RequestMapping("/viewLeaderByIndustry/{indId}")
	public List<Leaders> getLeaderByIndustry(@PathVariable("indId") String industryId) {
		return leadServ. getLeadersByIndustry(industryId);
	}
	/*Mapping for fetching the list of Leader by their location*/
	@RequestMapping("/viewLeaderByLocation/{locId}")
	public List<Leaders> getLeaderByLocation(@PathVariable("locId") String locId) {
		return leadServ. getLeadersByLocation(locId);
	}

	/*Mapping for fetching All Users*/
	@RequestMapping("/viewAllUsers")
	public List<Users> getUsers(){
		LOGGER.info("************\n\nReturned to the client the list of users");
			return userServ.getUsers();
	}
	/*Mapping for fetching a particular User by its id*/
	@RequestMapping("/getUserById/{userId}")
	public Users getUser(@PathVariable("userId") int userId) {
		Optional<Users> u = userServ. getUserById(userId);
		if(u.isPresent()) {
			LOGGER.info("************\n\nUser details is returned to the client");
			return u.get();
		}
		throw new NoSuchUserException("No Such User Exists");
	}
	/*Mapping for fetching the list of Users by their skill*/
	@RequestMapping("/viewUserBySkill/{skillId}")
	public List<Users> getUserBySkill(@PathVariable("skillId") String skillId) {
		return userServ. getUsersBySkill(skillId);
	}
	/*Mapping for fetching the list of Leader by their industry*/
	@RequestMapping("/viewUserByIndustry/{indId}")
	public List<Users> getUserByIndustry(@PathVariable("indId") String industryId) {
		return userServ. getUserByIndustry(industryId);
	}
	/*Mapping for fetching the list of Leader by their location*/
	@RequestMapping("/viewUserByLocation/{locId}")
	public List<Users> getUserByLocation(@PathVariable("locId") String locId) {
		return userServ. getUserByLocation(locId);
	}
	/*Mapping for fetching followers by leader Id*/
	@RequestMapping("/getFollowersbyId/{id}")
	public List<Object> getFollowersById(@PathVariable("id") int id) {
		LOGGER.info("************\n\nReturned to the client the list of followers");
		return fServ.getFollowers(id);
	}
	/*Mapping for fetching followings by user Id*/
	@RequestMapping("/getFollowingsbyId/{id}")
	public List<Object> getFollowingsById(@PathVariable("id") int id) {
		LOGGER.info("************\n\nReturned to the client the list of followings");
		return fServ.getFollowing(id);
	}
}