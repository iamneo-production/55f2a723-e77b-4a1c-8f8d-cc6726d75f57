package com.example.movieap.entities;
import javax.persistence.Entity;

import javax.persistence.Id;

import java.util.*;
@Entity
public class LikeModel {
    
    @Id
    private String Id;
    private int noOfLike;
    private List<UserModel>likedUser;

    public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public int getNoOfLike() {
		return noOfLike;
	}
	public void setNoOfLike(int noOfLike) {
		this.noOfLike = noOfLike;
	}
	public List<UserModel> getLikedUser() {
		return likedUser;
	}
	public void setLikedUser(List<UserModel> likedUser) {
		this.likedUser = likedUser;
	}

    
}
