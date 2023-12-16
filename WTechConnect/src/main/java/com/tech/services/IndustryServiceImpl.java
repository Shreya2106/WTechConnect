package com.tech.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Industry;
import com.tech.repository.IndustryRepository;

@Service("IndustryServiceImpl")
public class IndustryServiceImpl implements ManageData<Industry, Integer> { 
	//Implementing the user defined generic interface ManageData

	@Autowired
	IndustryRepository indusRepo;
	/*Adding the industry to the DB*/
	@Override
	public void add(Industry data) {
		indusRepo.save(data);
	}

	/*Deleting the industry from the DB*/
	@Override
	public void delete(Integer id) {
		indusRepo.deleteById(id);
	}
	/*Returning the list of industries present in the DB*/
	@Override
	public List<Industry> viewAll() {
		return indusRepo.viewAll();
	}

	public void edit(Industry ind) {
		indusRepo.edit(ind.getId(),ind.getName());
	}

}