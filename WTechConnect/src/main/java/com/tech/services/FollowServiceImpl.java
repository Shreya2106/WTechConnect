package com.tech.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Follow;
import com.tech.repository.FollowRepository;
import com.tech.repository.LeaderRepository;
import com.tech.repository.UserRepository;

@Service
public class FollowServiceImpl {
	@Autowired
	FollowRepository fRepo;
	@Autowired
	LeaderRepository lRepo;
	@Autowired
	UserRepository uRepo;
	/*Function called by leader for getting all the user that are its followers*/
	public List<Object> getFollowers(int leadId) {
		return fRepo.getFollowers(leadId);
	}
	/*Function called by user for getting all the leaders its following*/
	public List<Object> getFollowing(int userId) {
		return fRepo.getFollowing(userId);
	}

	/*Function called by user for following a leader*/
	public void followLeader(Follow follow) {
		fRepo.save(follow);
	}

	public List<Integer> check(int id) {
		return fRepo.check(id);
	}

	public List<Integer> getIdsOfFollowing(int userId) {
		return fRepo.check(userId);
	}
}
