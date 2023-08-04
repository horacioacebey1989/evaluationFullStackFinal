package com.backendEvaluation.backendEvaluation.persistence.repository;

import com.backendEvaluation.backendEvaluation.persistence.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}
