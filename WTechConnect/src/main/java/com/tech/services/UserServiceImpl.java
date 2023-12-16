package com.tech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Users;
import com.tech.repository.FollowRepository;
import com.tech.repository.UserRepository;

@Service("UserServiceImpl")
public class UserServiceImpl {
	@Autowired
	UserRepository uRepo;
	@Autowired
	FollowRepository fRepo;

	/*Adding the users data to the DB*/
	public void addUser(Users user) {
		uRepo.save(user);
	}

	/*Fetching the list of all users*/
	public List<Users> getUsers() {
		return uRepo.viewAll();
	}

	/*Getting the user by its ID*/
	//Optional is used because it may or may not be present. If its absent then null is returned.
	public Optional<Users> getUserById(int userId) {
		return uRepo.getUserById(userId);
	}
	/*Getting the details of user by email*/
	public Users getUserByEmail(String email) {
		return (uRepo.getUserByEmail(email)).get();
	}

	/*Getting the ID of the user by its email*/
	public int getUserId(String email) {
		return uRepo.getUserId(email);
	}

	/*Deleting the user from the DB*/
	public void deleteUser(int id) {
		uRepo.deleteById(id);
	}

	/*Update Operations*/
	public void updateUserSkill(int skillId, int id) {
		uRepo.updateUserSkill(skillId,id);
	}

	public void updateUserLocation(int locId, int id) {
		uRepo.updateUserLocation(locId,id);
	}

	public void updateUserIndustry(int indId, int id) {
		uRepo.updateUserIndustry(indId,id);
	}

	public void updateUserContact(String ph, int id) {
		uRepo.updateUserContact(ph,id);
	}

	/*Getting the list of users by skill*/
	public List<Users> getUsersBySkill(String skillId) {
		return uRepo.getUsersBySkill(skillId);
	}

	/*Getting the list of users by industry*/
	public List<Users> getUserByIndustry(String industryId) {
		return uRepo.getUsersByIndustry(industryId);
	}

	/*Getting the list of user by location*/
	public List<Users> getUserByLocation(String locId) {
		return uRepo.getUsersByLocation(locId);
	}

	public String getUserName(int id) {
		return uRepo.getLeaderName(id);
	}
}
