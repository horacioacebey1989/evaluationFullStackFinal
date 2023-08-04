package com.backendEvaluation.backendEvaluation.controller;

import com.backendEvaluation.backendEvaluation.dto.ProfileInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.Profile;
import com.backendEvaluation.backendEvaluation.persistence.entity.User;
import com.backendEvaluation.backendEvaluation.service.ProfileService;
import com.backendEvaluation.backendEvaluation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @Autowired
    private UserService userService;

    @PostMapping
    @RequestMapping(path="{userId}/addProfile", method = RequestMethod.POST)
    public Profile createProfile(@PathVariable("userId") int userId, @RequestBody ProfileInDTO profileInDTO){
        User user = userService.getUserById(userId);
        profileInDTO.setUser(user);
        return this.profileService.createProfile(profileInDTO);
    }
}
