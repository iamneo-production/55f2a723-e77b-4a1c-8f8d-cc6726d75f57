package com.example.movieap.controller;
import com.example.movieap.Daolayer.*;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.movieap.services.*;
import com.example.movieap.entities.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class MovieController {
    @Autowired
    private DaoLayer moviedao;
    @GetMapping("/movie")
    public List<MovieEntities> getmovies()
    {
        return moviedao.findAll();
    }
    @GetMapping("/movie/{id}")
    public List<MovieEntities> getmovie(String movieid)
    {
        return moviedao.getOne(movieid);
    }
}
    // @PostMapping("/login")
    // public boolean login(String email,String password)
    // {
    //     if()
    // }
    // @PostMapping("/signup")
    // public boolean signup(String eamil,String password)
    // {
        
    // }
   

}

