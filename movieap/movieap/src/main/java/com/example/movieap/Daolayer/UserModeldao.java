package com.example.movieap.Daolayer;
import com.example.movieap.entities.*;

import org.springframework.data.jpa.repository.JpaRepository;
public interface UserModeldao extends JpaRepository<UserModel,String> {
    
}




