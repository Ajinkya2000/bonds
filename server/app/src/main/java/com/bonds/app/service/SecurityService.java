
package com.bonds.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bonds.app.model.*;
import com.bonds.app.repository.*;

@Service
public class SecurityService {
	
 
	@Autowired  
	SecurityRepository securityRepository;  
	//getting all student records  
	public List<SecurityModel> getAllSecurity()   
	{  
	List<SecurityModel> securities = new ArrayList<SecurityModel>();  
	securityRepository.findAll().forEach(securities::add);  
	return securities;  
	}  
	//getting a specific record  
	public SecurityModel getSecurityById(int id)   
	{  
	return securityRepository.findById(id).get();  
	} 
	
	public void saveOrUpdate(SecurityModel securityModel)   
	{  
	securityRepository.save(securityModel);  
	}  
	//deleting a specific record  
	public void delete(int id)   
	{  
	securityRepository.deleteById(id);  
	}  
	 
	}  


