package com.bonds.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bonds.app.model.*;
import com.bonds.app.repository.*;

@Service
public class BookUserService {
	@Autowired  
	BookUserRepository bookUserRepository;  
	//getting all bookuser records  
	public List<BookUserModel> getAllBookUser()   
	{  
	List<BookUserModel> books = new ArrayList<BookUserModel>();  
	bookUserRepository.findAll().forEach(books::add);  
	return books;  
	}  
	//getting a specific record  
	public BookUserModel getBookUserById(int id)   
	{  
	return bookUserRepository.findById(id).get();  
	} 
	
	public void saveOrUpdate(BookUserModel bookUserModel)   
	{  
	bookUserRepository.save(bookUserModel);  
	}  
	//deleting a specific record  
	public void delete(int id)   
	{  
	bookUserRepository.deleteById(id);  
	}  
	 
}
