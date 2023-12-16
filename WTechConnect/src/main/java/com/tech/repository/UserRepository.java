package com.tech.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tech.model.Users;

public interface UserRepository extends JpaRepository<Users,Integer> {

	@Query("select e from Users e where e.email=:ide")
	Optional<Users> getUserByEmail(@Param("ide") String ide);

	@Transactional
	@Modifying
	@Query(value="update Users set contact_number=:ph where user_id=:id",nativeQuery = true)
	void updateUserContact(String ph, int id);

	@Transactional
	@Modifying
	@Query(value="update Users set industry_id_industry_id=:indId where user_id=:id",nativeQuery = true)
	void updateUserIndustry(int indId, int id);

	@Transactional
	@Modifying
	@Query(value="update Users set location_id_location_id=:locId where user_id=:id",nativeQuery = true)
	void updateUserLocation(int locId, int id);

	@Transactional
	@Modifying
	@Query(value="update Users  set skill_id_skill_id=:skillId where user_id=:id",nativeQuery = true)
	void updateUserSkill(int skillId, int id);

	@Query(value="select user_id from Users where email=:ide",nativeQuery = true)
	int getUserId(String ide);

	@Query(value="select * from Users e",nativeQuery = true)
	List<Users> viewAll();

	@Query("select e from Users e where e.userId=:userId")
	Optional<Users> getUserById(int userId);

	@Query(value="select * from Users where skill_id_skill_id=:ide",nativeQuery = true)
	List<Users> getUsersBySkill(String ide);

	@Query(value="select * from Users where industry_id_industry_id=:ide",nativeQuery = true)
	List<Users> getUsersByIndustry(String ide);

	@Query(value="select * from Users e where location_id_location_id=:ide",nativeQuery = true)
	List<Users> getUsersByLocation(String ide);

	@Query(value="select user_name from Users where user_id=:id",nativeQuery = true)
	String getLeaderName(int id);


}
