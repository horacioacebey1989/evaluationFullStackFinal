package com.backendEvaluation.backendEvaluation.dto;

import com.backendEvaluation.backendEvaluation.persistence.entity.Course;
import com.backendEvaluation.backendEvaluation.persistence.entity.Profile;
import lombok.Data;

@Data
public class SubscriptionInDTO {
    private String dateOfBirth;
    private String gender;
    private String address;
    private String phoneNumber;
    private String language;
    private String educationLevel;
    private Course course;
    private Profile profile;
}
