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
public class LoginController {
    @Autowired
   private DaoLayer dao;
    @Autowired
    private Getall movieele;

}
