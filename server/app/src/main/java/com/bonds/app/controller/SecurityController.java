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
import com.bonds.app.model.SecurityModel;
import com.bonds.app.service.BookService;
import com.bonds.app.service.SecurityService;

@RestController
public class SecurityController {
	
	@Autowired
	private SecurityService securityService;
	
	@GetMapping(path = "/security")  
	private List<SecurityModel> getAllSecurity(){  
	return securityService.getAllSecurity();  
	}  
	
	@GetMapping(path = "/security/{id}")  
	private SecurityModel getSecurity(@PathVariable("id") int id)   
	{  
	return securityService.getSecurityById(id);  
	}  
	
	@DeleteMapping("/security/{id}")  
	private void deleteSecurity(@PathVariable("id") int id)   
	{  
		securityService.delete(id);  
	}  
	@PostMapping("/security")  
	private int saveSecurity(@RequestBody SecurityModel securityModel)   
	{  
		securityService.saveOrUpdate(securityModel);  
	return securityModel.getId();
	}  

}


