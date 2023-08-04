package com.backendEvaluation.backendEvaluation.dto;

import com.backendEvaluation.backendEvaluation.persistence.entity.User;
import lombok.Data;

@Data
public class ProfileInDTO {
    private String fullName;
    private String country;
    private User user;
}
