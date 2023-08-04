package com.backendEvaluation.backendEvaluation.service;

import com.backendEvaluation.backendEvaluation.dto.SubscriptionInDTO;
import com.backendEvaluation.backendEvaluation.mapper.SubscriptionInDTOToSubscription;
import com.backendEvaluation.backendEvaluation.persistence.entity.Subscription;
import com.backendEvaluation.backendEvaluation.persistence.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;
    @Autowired
    SubscriptionInDTOToSubscription mapper;

    public Subscription createSubscription(SubscriptionInDTO subscriptionInDTO){
        Subscription subscription = mapper.map(subscriptionInDTO);
        return this.subscriptionRepository.save(subscription);
    }

    public List<Subscription> findAllCreateSubscription(){
        return this.subscriptionRepository.findAll();
    }
}
