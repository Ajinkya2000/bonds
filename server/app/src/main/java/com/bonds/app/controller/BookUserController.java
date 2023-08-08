package com.bonds.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bonds.app.model.BookModel;
import com.bonds.app.model.BookUserModel;
import com.bonds.app.service.BookUserService;

@RestController
public class BookUserController {
	@Autowired
	private BookUserService bookUserService;
	
	@GetMapping(path = "/bookUser")  
	private List<BookUserModel> getAllBookUser(){  
	return bookUserService.getAllBookUser();  
	}  
	
	@GetMapping(path = "/bookUser/{id}")  
	private BookUserModel getBookUser(@PathVariable("id") int id)   
	{  
	return bookUserService.getBookUserById(id);  
	}  
	
	@DeleteMapping("/bookUser/{id}")  
	private void deleteBookUser(@PathVariable("id") int id)   
	{  
	bookUserService.delete(id);  
	}  
	@PostMapping("/bookUser")  
	private int saveBookUser(@RequestBody BookUserModel bookUserModel)   
	{  
	bookUserService.saveOrUpdate(bookUserModel);  
	return bookUserModel.getBookId();
	}  

}
