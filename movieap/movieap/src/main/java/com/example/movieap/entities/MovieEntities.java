package com.example.movieap.entities;
import javax.persistence.Entity;

import javax.persistence.Id;
import java.util.*;
@Entity
public class MovieEntities {
  @Id
  private String email;
  private boolean active;
 
  
  private String password;
  private String mobileno;
  private String username;
  private String role;
public MovieEntities(String email, boolean active, String password, String mobileno, String username, String role) {
    this.email = email;
    this.active = active;
    this.password = password;
    this.mobileno = mobileno;
    this.username = username;
    this.role = role;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public boolean isActive() {
    return active;
}
public void setActive(boolean active) {
    this.active = active;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
public String getMobileno() {
    return mobileno;
}
public void setMobileno(String mobileno) {
    this.mobileno = mobileno;
}
public String getUsername() {
    return username;
}
public void setUsername(String username) {
    this.username = username;
}
public String getRole() {
    return role;
}
public void setRole(String role) {
    this.role = role;
}

  

}