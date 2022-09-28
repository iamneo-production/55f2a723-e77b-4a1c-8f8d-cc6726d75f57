package com.example.movieap.controller;
import com.example.movieap.Daolayer.*;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import com.example.movieap.services.*;
import com.example.movieap.entities.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
@RestController
public class signupController {
   @Autowired
   private DaoLayer dao;
    @Autowired
    private Getall movieele;
    @GetMapping("/movie")
    public List<MovieEntities> getmovies()
    {
        return movieele.findAll();
    }
    @GetMapping("/movie/{id}")
    public List<MovieEntities> getmovie(@PathVariable String movieid)
    {
        return movieele.getOne(movieid);
    }
    @PostMapping("/add")
    public Signup adddetails(@RequestBody Signup sign)
    {
         return dao.save(sign);
    }
    
}
