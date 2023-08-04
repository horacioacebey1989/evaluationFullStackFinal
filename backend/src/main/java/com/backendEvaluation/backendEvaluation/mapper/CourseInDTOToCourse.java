package com.backendEvaluation.backendEvaluation.mapper;

import com.backendEvaluation.backendEvaluation.dto.CourseInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.Course;
import org.springframework.stereotype.Component;

@Component
public class CourseInDTOToCourse implements IMapper<CourseInDTO, Course> {
    @Override
    public Course map(CourseInDTO in) {
        Course course = new Course();
        course.setNameCourse(in.getNameCourse());
        course.setRate(in.getRate());
        course.setDuration(in.getDuration());
        return course;
    }
}
