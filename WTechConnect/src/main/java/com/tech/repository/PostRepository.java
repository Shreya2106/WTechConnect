package com.tech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.tech.model.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {
	@Transactional
	@Modifying
	@Query(value="update Post set post_title=:title, post_desc=:desc where post_id=:id",nativeQuery = true)
	void editPost(String title, String desc, int id);
	@Query(value="select * from Post where created_by_leader_id=:id",nativeQuery = true)
	List<Post> viewAllById(int id);

	@Query(value="select * from Post where post_id=:id",nativeQuery = true)
	Post viewPostById(int id);

	@Query(value="select * from post",nativeQuery=true)
	List<Post> viewAll();

}
