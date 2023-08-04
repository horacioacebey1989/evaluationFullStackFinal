package com.backendEvaluation.backendEvaluation.mapper;

import com.backendEvaluation.backendEvaluation.dto.UserInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserInDTOToUser implements IMapper<UserInDTO, User>{
    @Override
    public User map(UserInDTO in) {
        User user = new User();
        user.setName(in.getName());
        user.setPassword(in.getPassword());
        return user;
    }
}
