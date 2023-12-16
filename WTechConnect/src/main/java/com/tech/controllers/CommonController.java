package com.tech.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tech.model.Industry;
import com.tech.model.JwtMessage;
import com.tech.model.Location;
import com.tech.model.Post;
import com.tech.model.Skill;
import com.tech.services.IndustryServiceImpl;
import com.tech.services.LeadersServicesImpl;
import com.tech.services.LocationServiceImpl;
import com.tech.services.PostServicesImpl;
import com.tech.services.SkillServiceImpl;
import com.tech.services.UserServiceImpl;

@CrossOrigin("*")
@RequestMapping("/common")
@RestController
public class CommonController {
	
	@Autowired
	SkillServiceImpl skillServ;
	
	@Autowired
	IndustryServiceImpl indServ;
	
	@Autowired
	LocationServiceImpl locServ;
	
	@Autowired
	PostServicesImpl postServ;
	
	@Autowired
	LeadersServicesImpl leadServ;
	
	@Autowired
	UserServiceImpl userServ;
	
	
	/*Mapping for fetching all skills */
	@RequestMapping("/skills")
	public List<Skill> getSkills(){
		return skillServ.viewAll();
	}
	
	/*Mapping for fetching all industries */
	@RequestMapping("/industry")
	public List<Industry> getIndustry(){
		return indServ.viewAll();
	}
	
	/*Mapping for fetching all locations*/
	@RequestMapping("/locations")
	public List<Location> getLocations(){
		return locServ.viewAll();
	}
	
	/*Mapping for fetching all post of a certain leader */
	@RequestMapping("/viewAllPost/{id}")
	public List<Post> getIndustry(@PathVariable int id){
		return postServ.viewAllById(id);
	}
	
	/*Get Post By Post-Id*/
	@RequestMapping(value="/viewPostById/{id}")
	public Post postById(@PathVariable int id){
		return postServ.getPostById(id);
	}
	
	/*Get Posts by leader Id*/
	@RequestMapping("/getLeadersPost/{id}")
	public List<Post> getLeadersPost(@PathVariable int id){
		return postServ.viewAllById(id);
	}
	
	/*Get Leader Id by leader name*/
	@RequestMapping("/viewLeaderIdByName/{name}")
	public int getLeadersId(@PathVariable String name){
		return leadServ.getLeaderIdByName(name);
	}
	
	/*Get Leader Name by leader ID*/
	@RequestMapping("/viewLeaderNameById/{id}")
	public ResponseEntity<?> getLeadersName(@PathVariable int id){
		String name=leadServ.getLeaderName(id);
		System.out.println(name);
		return ResponseEntity.ok(new JwtMessage(name));
	}
	
	/*Get User Name by user ID*/
	@RequestMapping("/viewUserNameById/{id}")
	public ResponseEntity<?> getUserName(@PathVariable int id){
		String name=userServ.getUserName(id);
		return ResponseEntity.ok(new JwtMessage(name));
	}

}
