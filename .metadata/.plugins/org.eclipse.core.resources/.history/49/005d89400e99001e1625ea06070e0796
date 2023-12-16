package com.tech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Leaders;
import com.tech.repository.FollowRepository;
import com.tech.repository.LeaderRepository;

@Service("LeadersServicesImpl")
public class LeadersServicesImpl {
	@Autowired
	LeaderRepository lRepo;
	@Autowired
	FollowRepository fRepo;

	/*Fetching the list of all leaders*/
	public List<Leaders> viewAll() {
		return lRepo.viewAll();
	}

	/*Getting the leader by its ID*/
	//Optional is used because it may or may not be present. If its absent then null is returned.
	public Optional<Leaders> getLeaderById(int leaderId) {
		return lRepo.getLeaderById(leaderId);
	}
	/*Getting the ID of the leader by its email*/
	public int getLeaderId(String email) {
		return lRepo.getLeaderId(email) ;
	}
	/*Getting the ID of the leader by its name*/
	public int getLeaderIdByName(String email) {
		return lRepo.getLeaderIdByName(email) ;
	}

	/*Getting the list of leader by skill*/
	public List<Leaders> getLeadersBySkill(String skillId) {
		return lRepo.getLeadersBySkill(skillId);
	}

	/*Getting the list of leader by industry*/
	public List<Leaders> getLeadersByIndustry(String industryId) {
		return lRepo.getLeadersByIndustry(industryId);
	}

	/*Getting the list of leader by location*/
	public List<Leaders> getLeadersByLocation(String locId) {
		return lRepo.getLeadersByLocation(locId);
	}

	/*Adding the leaders data to the DB*/
	public void addLeader(Leaders lead) {
		lRepo.save(lead);
	}
	/*Deleting the leader from the DB*/
	public void deleteLeader(int id) {
		lRepo.deleteById(id);
	}
	/*Update Operations*/
	public void updateLeaderSkill(int skillId, int id) {
		lRepo.updateSkill(skillId,id);	
	}
	public void updateLeaderIndustry(int indId, int id) {
		lRepo.updateIndustry(indId,id);	
	}
	public void updateLeaderLocation(int locId, int id) {
		lRepo.updateLocation(locId,id);	
	}
	public void updateLeaderContact(String contact, int id) {
		lRepo.updateContact(contact,id);	
	}

	public Optional<Leaders> getLeaderByEmail(String email) {
		return lRepo.getLeaderByEmail(email);
	}

	public String getLeaderName(int id) {
		return lRepo.getLeaderName(id);
	}
}
