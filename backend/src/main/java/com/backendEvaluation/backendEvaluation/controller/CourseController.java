package com.backendEvaluation.backendEvaluation.controller;

import com.backendEvaluation.backendEvaluation.dto.CourseInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.Course;
import com.backendEvaluation.backendEvaluation.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(name="/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PostMapping
    @RequestMapping(path="/addCourse", method = RequestMethod.POST)
    public Course createCourse(@RequestBody CourseInDTO courseInDTO){
        return this.courseService.createCourse(courseInDTO);
    }
}
