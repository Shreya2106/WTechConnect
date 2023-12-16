package com.tech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.tech.model.Industry;

public interface IndustryRepository extends JpaRepository<Industry, Integer> {
	@Query(value="select * from Industry",nativeQuery = true)
	List<Industry> viewAll();
	@Transactional
	@Modifying
	@Query(value="update Industry set industry_name=:namee where industry_id=:ide",nativeQuery=true)
	void edit(int ide, String namee);

}
