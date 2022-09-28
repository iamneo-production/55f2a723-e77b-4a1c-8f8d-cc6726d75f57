package com.example.movieap.entities;
import java.util.*;
import javax.persistence.Entity;

import javax.persistence.Id;

@Entity
public class Signup {

    @Id
    private String email;
    private String password;
    public Signup(String email, String password) {
        this.email = email;
        this.password = password;
    }
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
