package com.backendEvaluation.backendEvaluation.persistence.repository;

import com.backendEvaluation.backendEvaluation.persistence.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {
}
