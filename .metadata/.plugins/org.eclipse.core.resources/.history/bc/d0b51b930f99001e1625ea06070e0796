package com.tech.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tech.exceptions.AlreadyFollowingException;
import com.tech.model.Follow;
import com.tech.model.JwtMessage;
import com.tech.model.Leaders;
import com.tech.model.Post;
import com.tech.model.Users;
import com.tech.services.FollowServiceImpl;
import com.tech.services.LeadersServicesImpl;
import com.tech.services.PostServicesImpl;
import com.tech.services.UserServiceImpl;

@CrossOrigin("*")
@RequestMapping("/user")
@RestController
public class UserController {
	private static final Logger LOGGER=LoggerFactory.getLogger(UserController.class);
	@Autowired
	UserServiceImpl userServ;
	@Autowired
	LeadersServicesImpl leadServ;
	@Autowired
	FollowServiceImpl fServ;
	@Autowired
	PostServicesImpl postServ;
	/*Mapping for updating a User's Skill*/
	@PutMapping(value="/SkillUp/{skillId}")
	public ResponseEntity<?> updateLeaderSkill(@PathVariable int skillId) {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email ="";
		if(principal instanceof UserDetails)
			email = ((UserDetails)principal).getUsername();
		else
			email = principal.toString();
		int id = userServ.getUserId(email);
		userServ.updateUserSkill(skillId,id);
		LOGGER.info("************\n\nSkill updated for user {}",id);
		return ResponseEntity.ok(new JwtMessage("Skill updated for user"+id));
	}
	/*Mapping for updating a User's Location*/
	@PutMapping(value="/LocationUp/{locId}")
	public ResponseEntity<?> updateLeaderLoc(@PathVariable int locId) {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email ="";
		if(principal instanceof UserDetails)
			email = ((UserDetails)principal).getUsername();
		else
			email = principal.toString();
		int id = userServ.getUserId(email);
		userServ.updateUserLocation(locId,id);
		LOGGER.info("************\n\nLocation updated for user {}",id);
		return ResponseEntity.ok(new JwtMessage("Location updated for user"+id));
	}

	/*Mapping for updating a User's Industry*/
	@PutMapping(value="/IndustryUp/{indId}")
	public ResponseEntity<?> updateUserInd(@PathVariable int indId) {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email ="";
		if(principal instanceof UserDetails)
			email = ((UserDetails)principal).getUsername();
		else
			email = principal.toString();
		int id = userServ.getUserId(email);
		userServ.updateUserIndustry(indId,id);
		LOGGER.info("************\n\nIndustry updated for user {}",id);
		return ResponseEntity.ok(new JwtMessage("Industry updated for user"+id));
	}

	/*Mapping for updating a User's Contact*/
	@PutMapping(value="/ContactUp/{ph}")
	public ResponseEntity<?> updateLeaderPh(@PathVariable String ph) {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email ="";
		if(principal instanceof UserDetails)
			email = ((UserDetails)principal).getUsername();
		else
			email = principal.toString();
		int id = userServ.getUserId(email);
		userServ.updateUserContact(ph,id);
		LOGGER.info("************\n\nContact updated for user {}",id);
		return ResponseEntity.ok(new JwtMessage("Contact updated for user"+id));
	}

	/*Mapping for deleting a user*/
	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable int id) {
		userServ.deleteUser(id);
		LOGGER.info("************\n\nUser of id {} deleted successfully.",id);
		return ResponseEntity.ok(new JwtMessage("User Deleted of id:"+id));
	}
	/*Mapping for following a leader*/
	@PostMapping(value="/leaderfollow/{id}")
	public ResponseEntity<?> followLeader(@PathVariable int id) {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email ="";
		if(principal instanceof UserDetails)
			email = ((UserDetails)principal).getUsername();
		else
			email = principal.toString();
		int uid = userServ.getUserId(email);
		Optional<Users> u = userServ.getUserById(uid);
		Optional<Leaders> lead = leadServ.getLeaderById(id);
		List<Integer> lid = fServ.check(uid);
		if(lid.contains(lead.get().getLeaderId())) {
			LOGGER.info("************\n\nAlready following leader{}",id);
			throw new AlreadyFollowingException("Already following leader"+id);
		}
		Follow follow = new Follow(u.get(),lead.get());
		fServ.followLeader(follow);
		LOGGER.info("************\n\nStarted following leader{}",id);
		return ResponseEntity.ok(new JwtMessage("Started following leader"+id));
	}
	/*Mapping for fetching all the followings of the logged user*/
	@RequestMapping("/myFollowings")
	public List<Object> getFollowings() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email ="";
		if(principal instanceof UserDetails)
			email = ((UserDetails)principal).getUsername();
		else
			email = principal.toString();
		int userId = userServ.getUserId(email);
		LOGGER.info("************\n\nReturned to the client the list of followings");
		return fServ. getFollowing(userId);
	}
	/*Mapping for fetching user details from email*/
	@RequestMapping("/userDetails/{email}")
	public Users getDetails(@PathVariable String email) {
		Users u = userServ.getUserByEmail(email);
		LOGGER.info("************\n\nReturned to the client the entire details of the user");
		return u;
	}
	/*Mapping to fetch posts of leader the user follows*/
	@RequestMapping("/viewAllPost")
	public List<Post> getFollowingsPost(){
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email ="";
		if(principal instanceof UserDetails)
			email = ((UserDetails)principal).getUsername();
		else
			email = principal.toString();
		int userId = userServ.getUserId(email);
		List<Integer> leadIds = fServ.getIdsOfFollowing(userId);
		List<Post> p = new ArrayList<>();
		for(Integer i : leadIds) {
			List<Post> pt = postServ.viewAllById(i);
			p.addAll(pt);
		}
		return p;
	}

}
