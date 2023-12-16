package com.tech.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Post;
import com.tech.repository.PostRepository;

@Service("PostServiceImpl")
public class PostServicesImpl{

	@Autowired
	PostRepository pRepo;
	/*Creating a Post*/
	public void add(Post post) {
		pRepo.save(post);
	}
	/*Update the Post*/
	public void editPost(Post post) {
		int id = post.getId();
		String desc = post.getDesc();
		String title = post.getTitle();
		pRepo.editPost(desc,title,id);
	}
	/*Deleting the post from the DB*/
	public void delete(Integer id) {
		pRepo.deleteById(id);
	}

	/*View All the post of the leader*/
	public List<Post> viewAllById(int id) {
		return pRepo.viewAllById(id);
	}

	/*View All the post*/
	public List<Post> viewAll() {
		return pRepo.viewAll();
	}

	/*View Post By Post Id*/
	public Post getPostById(int id) {
		return pRepo.viewPostById(id);
	}
}
