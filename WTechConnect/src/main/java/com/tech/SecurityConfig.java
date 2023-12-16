package com.tech;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import com.tech.filter.JwtRequestFilter;

@SuppressWarnings("deprecation")
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService currentUserDetailsService;
    
    @Autowired
    private JwtRequestFilter jwtRequestFilter;
    
    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
   
    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
        /** Todo -Adding password encoder */
    }
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(currentUserDetailsService);
    }
    
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception{
         List<String> allowedMethods=new ArrayList<>();
            allowedMethods.add("RequestMethod.POST");
            allowedMethods.add("RequestMethod.GET");
            allowedMethods.add("RequestMethod.PUT");
            allowedMethods.add("RequestMethod.DELETE");
        CorsConfiguration cors=new CorsConfiguration();
        cors.setAllowedMethods(allowedMethods);
        httpSecurity.cors().and().csrf().disable()
            .authorizeRequests().antMatchers("/login").permitAll().
            antMatchers("/leader/**").hasRole("LEADER").
            antMatchers("/user/common/**").hasAnyRole("LEADER","USER").
            antMatchers("/user/**").hasRole("USER").
            antMatchers("/common/**").permitAll().
            and().
            exceptionHandling().and().sessionManagement()
           .sessionCreationPolicy(SessionCreationPolicy.STATELESS);//Since we are using JWT we are not creating sessions so its stateless
        httpSecurity.addFilterBefore(jwtRequestFilter,UsernamePasswordAuthenticationFilter.class);
    }
}
