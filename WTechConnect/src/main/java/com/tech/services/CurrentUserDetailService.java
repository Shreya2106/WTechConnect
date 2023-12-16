package com.tech.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tech.model.CurrentUserDetails;
import com.tech.model.Leaders;
import com.tech.model.Users;
import com.tech.repository.LeaderRepository;
import com.tech.repository.UserRepository;

/*Providing Custom authentication*/
@Service
public class CurrentUserDetailService implements UserDetailsService {
	@Autowired
	UserRepository userRepo;
	@Autowired
	LeaderRepository leadRepo;
	/*DAO Authentication*/
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Users> user = userRepo.getUserByEmail(email);
		//If the email doesn't belong to any user then checking it for the leaders
		if(!user.isPresent()) {
			Optional<Leaders> lead =  leadRepo.getLeaderByEmail(email);

			//If neither user nor leader is present then exception is thrown
			lead.orElseThrow(() -> new UsernameNotFoundException("Not Found User of email: "+email));
			return lead.map(CurrentUserDetails::new).get();
		}
		return user.map(CurrentUserDetails::new).get();
	}

}
