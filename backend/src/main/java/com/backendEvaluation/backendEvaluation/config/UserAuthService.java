package com.backendEvaluation.backendEvaluation.config;

import com.backendEvaluation.backendEvaluation.persistence.entity.User;
import com.backendEvaluation.backendEvaluation.persistence.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserAuthService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User inDB = userRepository.findByName(username);
        if (inDB == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return (UserDetails) inDB;
    }


}
