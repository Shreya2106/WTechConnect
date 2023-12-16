package com.tech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.tech.model.Skill;

public interface SkillRepository extends JpaRepository<Skill,Integer>{
	@Query(value="select * from Skill",nativeQuery = true)
	List<Skill> viewAll();

	@Transactional
	@Modifying
	@Query(value="update Skill set skill_name=:namee where skill_id=:ide",nativeQuery=true)
	void edit(int ide, String namee);
}
