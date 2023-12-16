package com.tech.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtUtil {
	private String secretKey = "secret";
	/*Validating Token*/
	public Boolean validateToken(String token, UserDetails userDetails) {
		final String email = extractEmail(token);
		return (email.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
	public String extractEmail(String token) {
		return extractClaim(token,Claims::getSubject);
	}
	public <T> T extractClaim(String token, Function<Claims,T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	private Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
	}
	//Checking whether the token is expired or not
	public Boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
	//Extracting expiration from the token
	public Date extractExpiration(String token) {
		return extractClaim(token,Claims::getExpiration);
	}
	/*Generating tokens when the user logs in*/
	public String generateToken(UserDetails userdetails) {
		Map<String,Object> claims = new HashMap<>();
		return createToken(claims,userdetails.getUsername());
	}
	private String createToken(Map<String,Object> claims, String subject) {
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+10000*60*60*10)) //Setting the expiration time of the token to 1 hr
				.signWith(SignatureAlgorithm.HS256,secretKey).compact();
	}
}
