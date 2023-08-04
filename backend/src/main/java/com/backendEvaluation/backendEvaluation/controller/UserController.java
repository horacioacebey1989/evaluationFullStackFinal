package com.backendEvaluation.backendEvaluation.controller;

import com.backendEvaluation.backendEvaluation.dto.UserInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.User;
import com.backendEvaluation.backendEvaluation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public User createUser(@RequestBody UserInDTO userInDTO){
        return this.userService.createUser(userInDTO);
    }

    @GetMapping
    @RequestMapping(path="/getUsers", method = RequestMethod.GET)
    public List<User> findAllUsers(){
        return this.userService.findAllUsers();
    }

    @GetMapping
    @RequestMapping(path="/login", method = RequestMethod.GET)
    public User login(@RequestBody UserInDTO userInDTO){
        return this.userService.getUserByName(userInDTO.getName());
    }

    @PostMapping("/loginUser")
    public User loginUser(@RequestBody UserInDTO userInDTO) {
        User user = userService.loginUser(userInDTO);
        //userInDTO.setToken(userAuthenticationProvider.createToken(userDto.getLogin()));
        return user;
    }

}
