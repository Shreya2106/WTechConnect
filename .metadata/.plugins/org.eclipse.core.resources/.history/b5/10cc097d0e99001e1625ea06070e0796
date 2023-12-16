package com.tech.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Location;
import com.tech.repository.LocationRepository;

@Service("LocationServiceImpl")
public class LocationServiceImpl implements ManageData<Location, Integer> {

	@Autowired
	LocationRepository locRepo;
	/*Adding the location to the DB*/
	@Override
	public void add(Location data) {
		locRepo.save(data);
	}

	/*Deleting the location from the DB*/
	@Override
	public void delete(Integer id) {
		locRepo.deleteById(id);
	}

	/*Returning the list of locations present in the DB*/
	@Override
	public List<Location> viewAll() {
		return locRepo.viewAll();
	}

	public void edit(Location loc) {
		locRepo.edit(loc.getId(),loc.getName());
	}

}
