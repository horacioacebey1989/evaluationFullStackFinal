package com.backendEvaluation.backendEvaluation.service;

import com.backendEvaluation.backendEvaluation.dto.CourseInDTO;
import com.backendEvaluation.backendEvaluation.mapper.CourseInDTOToCourse;
import com.backendEvaluation.backendEvaluation.persistence.entity.Course;
import com.backendEvaluation.backendEvaluation.persistence.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private CourseInDTOToCourse mapper;

    public Course createCourse(CourseInDTO courseInDTO){
        Course course = mapper.map(courseInDTO);
        return this.courseRepository.save(course);
    }
}
