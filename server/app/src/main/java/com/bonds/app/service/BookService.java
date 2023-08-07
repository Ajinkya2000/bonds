package com.bonds.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bonds.app.model.*;
import com.bonds.app.repository.*;

@Service
public class BookService {
	
 
	@Autowired  
	BookRepository bookRepository;  
	 
	public List<BookModel> getAllBook(){  
		List<BookModel> books = new ArrayList<BookModel>();  
		bookRepository.findAll().forEach(books::add);  
		return books;  
	}  
	
	public BookModel getBookById(int id){  
		return bookRepository.findById(id).get();  
	} 
	
	//update
	public void saveOrUpdate(BookModel bookModel){  
		bookRepository.save(bookModel);  
	}  
	
	//deleting a specific record  
	public void delete(int id){  
		bookRepository.deleteById(id);  
	}  
	 
}  

