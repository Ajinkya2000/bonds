package com.bonds.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class UserModel {

    @Id
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "role", nullable = false)
    private String role;
    
    @Column(name = "password", nullable = false)
    private String password;

    

	public UserModel() {
    }

    public UserModel(int id, String name,String password, String email, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password=password;
    }
    
    public String getPassword() {
		return password;
	}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
