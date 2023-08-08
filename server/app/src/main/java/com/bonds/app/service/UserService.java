package com.bonds.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bonds.app.model.*;
import com.bonds.app.repository.*;

@Service
public class UserService {
	@Autowired  
	UserRepository userRepository;  
	//getting all student records  
	public List<UserModel> getAllUser()   
	{  
	List<UserModel> users = new ArrayList<UserModel>();  
	userRepository.findAll().forEach(users::add);  
	return users;  
	}  
	//getting a specific record  
	public UserModel getAuth(String username, String password){  
		System.out.println(username + password);
		List<UserModel> users = new ArrayList<UserModel>();  
		users = userRepository.findAll();
		for(UserModel user: users) {
			System.out.println(user.getName() + user.getPassword());
			if(Objects.equals(user.getName(), username) && Objects.equals(user.getPassword(), password)) {
				return user;
			}
		}
		return null;
	} 
	
	public void saveOrUpdate(UserModel userModel){  
		userRepository.save(userModel);  
	}
	
	//deleting a specific record  
	public void delete(int id){  
		userRepository.deleteById(id);  
	}
	
}
