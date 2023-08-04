package com.backendEvaluation.backendEvaluation.mapper;

import com.backendEvaluation.backendEvaluation.dto.ProfileInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.Profile;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
@Component
public class ProfileInDTOToProfile implements IMapper<ProfileInDTO, Profile>{
    @Override
    public Profile map(ProfileInDTO in) {
        Profile profile = new Profile();
        profile.setFullName(in.getFullName());
        profile.setCountry(in.getCountry());
        profile.setUser(in.getUser());
        return profile;
    }
}
