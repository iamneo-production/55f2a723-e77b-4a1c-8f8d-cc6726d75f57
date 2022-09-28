package com.example.movieap.repository;
import org.springframework.data.jpa.repository.*;
public interface MovieRepository extends JpaRepository<MovieEntities, String> {
    @Query("SELECT u FROM MovieEntities u WHERE u.email = ?1")
    public User findByEmail(String email);
     
}