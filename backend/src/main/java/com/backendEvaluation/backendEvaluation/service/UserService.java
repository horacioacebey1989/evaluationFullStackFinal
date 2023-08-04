package com.backendEvaluation.backendEvaluation.service;

import com.backendEvaluation.backendEvaluation.exceptions.AppException;
import com.backendEvaluation.backendEvaluation.mapper.UserInDTOToUser;
import com.backendEvaluation.backendEvaluation.dto.UserInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.User;
import com.backendEvaluation.backendEvaluation.persistence.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.support.incrementer.SybaseAnywhereMaxValueIncrementer;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.transaction.Transactional;
import java.nio.CharBuffer;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserInDTOToUser mapper;

    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(UserInDTO userInDTO){
        User user = mapper.map(userInDTO);
        String varPass = this.passwordEncoder.encode(userInDTO.getPassword());
        user.setPassword(varPass);
        return this.userRepository.save(user);
    }

    public User getUserByName(String name){
        User user = userRepository.findByName(name);
        return user;
    }

    public User getUserById(int id_user){
        Optional<User> user = this.userRepository.findById(id_user);
        if(user.isPresent()){
            return user.get();
        }else{
            return null;
        }
    }

    public User loginUser(UserInDTO userInDTO) {
        User user = userRepository.findByName(userInDTO.getName());
        System.out.println(user);
        if(user==null){
            throw new AppException("user incorrect!", HttpStatus.BAD_REQUEST);
        }
        if (this.passwordEncoder.matches(userInDTO.getPassword(), user.getPassword())) {
            return user;
        }
        throw new AppException("Invalid password ", HttpStatus.BAD_REQUEST);
    }

    public List<User> findAllUsers(){
        return this.userRepository.findAll();
    }
}
