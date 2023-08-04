package com.backendEvaluation.backendEvaluation.mapper;

import com.backendEvaluation.backendEvaluation.dto.SubscriptionInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.Subscription;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class SubscriptionInDTOToSubscription implements IMapper<SubscriptionInDTO, Subscription> {
    @Override
    public Subscription map(SubscriptionInDTO in) {
        Subscription subscription = new Subscription();
        subscription.setDateOfBirth(in.getDateOfBirth());
        subscription.setGender(in.getGender());
        subscription.setAddress(in.getAddress());
        subscription.setPhoneNumber(in.getPhoneNumber());
        subscription.setLanguage(in.getLanguage());
        subscription.setEducationLevel(in.getEducationLevel());
        subscription.setProfile(in.getProfile());
        subscription.setCourse(in.getCourse());
        return subscription;
    }
}
