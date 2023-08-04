package com.backendEvaluation.backendEvaluation.service;

import com.backendEvaluation.backendEvaluation.dto.ProfileInDTO;
import com.backendEvaluation.backendEvaluation.mapper.ProfileInDTOToProfile;
import com.backendEvaluation.backendEvaluation.persistence.entity.Profile;
import com.backendEvaluation.backendEvaluation.persistence.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;
    @Autowired
    private ProfileInDTOToProfile mapper;

    public Profile createProfile(ProfileInDTO profileInDTO){
        Profile profile = mapper.map(profileInDTO);
        return this.profileRepository.save(profile);
    }

}
