package com.tech.services;

import java.util.List;

/* Generic Interface*/
public interface ManageData<T,A> { 
	void add(T data);
	void delete(A id);
	List<T> viewAll();
}
