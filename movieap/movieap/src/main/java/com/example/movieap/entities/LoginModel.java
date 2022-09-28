package com.example.movieap.entities;
import javax.persistence.Entity;

import javax.persistence.Id;
import java.util.*;

@Entity
public class LoginModel {
    
    @Id
    private String email;
    private String password;
    
    public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
