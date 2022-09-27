package com.example.movieap.entities;
import javax.persistence.Entity;

import javax.persistence.Id;
import java.util.*;
@Entity
public class MovieEntities {
  @Id
  private String movieid;
  private String moviename;
  private String movieUrl;
 List<String> movieCast=new ArrayList<>();
  private boolean active;
  String nooflike;
  private String email;
  private String password;
  private String mobileno;
  private String username;
  private String role;
public MovieEntities(String movieid, String moviename, String movieUrl, List<String> movieCast, boolean active,
        String nooflike, String email, String password, String mobileno, String username, String role) {
    this.movieid = movieid;
    this.moviename = moviename;
    this.movieUrl = movieUrl;
    this.movieCast = movieCast;
    this.active = active;
    this.nooflike = nooflike;
    this.email = email;
    this.password = password;
    this.mobileno = mobileno;
    this.username = username;
    this.role = role;
}
public String getMovieid() {
    return movieid;
}
public void setMovieid(String movieid) {
    this.movieid = movieid;
}
public String getMoviename() {
    return moviename;
}
public void setMoviename(String moviename) {
    this.moviename = moviename;
}
public String getMovieUrl() {
    return movieUrl;
}
public void setMovieUrl(String movieUrl) {
    this.movieUrl = movieUrl;
}
public List<String> getMovieCast() {
    return movieCast;
}
public void setMovieCast(List<String> movieCast) {
    this.movieCast = movieCast;
}
public boolean isActive() {
    return active;
}
public void setActive(boolean active) {
    this.active = active;
}
public String getNooflike() {
    return nooflike;
}
public void setNooflike(String nooflike) {
    this.nooflike = nooflike;
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