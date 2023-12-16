package com.tech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.tech.model.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {
	@Query(value="select * from Location",nativeQuery = true)
	List<Location> viewAll();
	@Transactional
	@Modifying
	@Query(value="update Location set location_name=:namee where location_id=:ide",nativeQuery=true)
	void edit(int ide, String namee);
}
