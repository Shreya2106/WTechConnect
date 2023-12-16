package com.tech.model;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@SuppressWarnings("serial")
public class CurrentUserDetails implements UserDetails {

	private String username;
	private String password;
	private List<GrantedAuthority> authorities; //permission of the authenticated user
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	public CurrentUserDetails(Users user) {
		super();
		this.username = user.getEmail();
		this.password = user.getPassword();
		this.authorities = Arrays.stream(user.getRole().split(","))
				.map(SimpleGrantedAuthority::new) 
				.collect(Collectors.toList());
		//SimpleGrantedAuthority:Stores a String representation of an authority granted to the Authentication object.
	}

	public CurrentUserDetails(Leaders lead) {
		super();
		this.username = lead.getEmail();
		this.password = lead.getPassword();
		this.authorities = Arrays.stream(lead.getRole().split(","))
				.map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
