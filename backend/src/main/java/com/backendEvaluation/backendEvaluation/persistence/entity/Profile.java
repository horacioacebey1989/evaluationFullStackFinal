package com.backendEvaluation.backendEvaluation.persistence.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idProfile;
    private String fullName;
    private String country;
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    public Integer getIdProfile() {
        return idProfile;
    }

    public void setIdProfile(Integer idProfile) {
        this.idProfile = idProfile;
    }

}
