package com.example.movieap.repository;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<UserModel, Long> {
    @Query("SELECT u FROM MovieEntities u WHERE u.email = ?1")
    public User findByEmail(String email);
     
}