package com.backendEvaluation.backendEvaluation.persistence.repository;

import com.backendEvaluation.backendEvaluation.dto.UserInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByName(String Name);
}
