package com.backendEvaluation.backendEvaluation.persistence.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "subscription_course")
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idSubscription;
    private String dateOfBirth;
    private String gender;
    private String address;
    private String phoneNumber;
    private String language;
    private String educationLevel;
    @ManyToOne
    @JoinColumn(name = "id_profile")
    private Profile profile;
    @ManyToOne
    @JoinColumn(name = "id_course")
    private Course course;

    public Integer getIdSubscriptionCourse() {
        return idSubscription;
    }

    public void setIdSubscriptionCourse(Integer idSubscriptionCourse) {
        this.idSubscription = idSubscriptionCourse;
    }
}
