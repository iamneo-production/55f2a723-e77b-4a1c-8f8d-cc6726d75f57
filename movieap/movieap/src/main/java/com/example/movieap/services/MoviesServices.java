package com.example.movieap.services;

import com.example.movieap.Daolayer.*;
import com.example.movieap.entities.*;
import java.util.*;
public interface MoviesServices {

    

    
    public List<MovieEntities> getmovies();
    public List<MovieEntities> getmovie(String movieid);
    public List<Signup> adddetails(String signup);
    // public boolean login(String email,String password);
    // public boolean signup(string email,string password);

}
