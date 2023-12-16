package com.tech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tech.model.Follow;

public interface FollowRepository extends JpaRepository<Follow, Integer> {

	@Query(value="select u.user_id,u.contact_number,u.email,u.user_name from follow f join users u on f.user_id_user_id=u.user_id where f.leader_id_leader_id=:leadId",nativeQuery = true)
	List<Object> getFollowers(int leadId);

	@Query(value="select l.leader_id,l.contact_number,l.email,l.leader_name from follow f join leaders l on f.leader_id_leader_id=l.leader_id where f.user_id_user_id=:id",nativeQuery = true)
	List<Object> getFollowing(int id);
	@Query(value="select leader_id_leader_id from follow where user_id_user_id=:id",nativeQuery = true)
	List<Integer> check(int id);

}