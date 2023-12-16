package com.tech.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Skill;
import com.tech.repository.SkillRepository;

@Service("SkillServiceImpl")
public class SkillServiceImpl implements ManageData<Skill, Integer> {

	@Autowired
	SkillRepository skillRepo;
	/*Adding the skill to the DB*/
	@Override
	public void add(Skill data) {
		skillRepo.save(data);
	}

	/*Deleting the skill from the DB*/
	@Override
	public void delete(Integer id) {
		skillRepo.deleteById(id);
	}

	/*Returning the list of skills present in the DB*/
	@Override
	public List<Skill> viewAll() {
		return skillRepo.viewAll();
	}

	public void edit(Skill skill) {
		 skillRepo.edit(skill.getId(),skill.getName());
	}

}