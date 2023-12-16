package com.tech.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tech.model.Leaders;

public interface LeaderRepository extends JpaRepository<Leaders,Integer> {

	@Query(value="select * from Leaders where email=:ide",nativeQuery = true)
	Optional<Leaders> getLeaderByEmail(@Param("ide") String ide);

	@Query(value="select * from Leaders",nativeQuery = true)
	List<Leaders> viewAll();

	@Query(value="select * from Leaders where skill_id_skill_id=:ide",nativeQuery = true)
	List<Leaders> getLeadersBySkill(String ide);

	@Query(value="select * from Leaders where industry_id_industry_id=:ide",nativeQuery = true)
	List<Leaders> getLeadersByIndustry(String ide);

	@Query(value="select * from Leaders e where location_id_location_id=:ide",nativeQuery = true)
	List<Leaders> getLeadersByLocation(String ide);

	@Transactional
	@Modifying
	@Query(value="update Leaders set skill_id_skill_id=:skill where leader_id=:id",nativeQuery = true)
	void updateSkill(int skill, int id);
	@Transactional
	@Modifying
	@Query(value="update Leaders set industry_id_industry_id=:ind where leader_id=:id",nativeQuery = true)
	void updateIndustry(int ind, int id);
	@Transactional
	@Modifying
	@Query(value="update Leaders set location_id_location_id=:loc where leader_id=:id",nativeQuery = true)
	void updateLocation(int loc, int id);
	@Transactional
	@Modifying
	@Query(value="update Leaders set contact_number=:ph where leader_id=:id",nativeQuery = true)
	void updateContact(String ph, int id);

	@Query(value="select leader_id from Leaders where email=:ide",nativeQuery = true)
	int getLeaderId(String ide);

	@Query(value="select * from Leaders where leader_id=:leaderId",nativeQuery = true)
	Optional<Leaders> getLeaderById(int leaderId);

	@Query(value="select leader_id from Leaders where leader_name=:name",nativeQuery = true)
	int getLeaderIdByName(String name);

	@Query(value="select leader_name from Leaders where leader_id=:id",nativeQuery = true)
	String getLeaderName(int id);
}
