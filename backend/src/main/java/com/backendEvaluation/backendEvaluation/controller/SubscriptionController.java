package com.backendEvaluation.backendEvaluation.controller;

import com.backendEvaluation.backendEvaluation.dto.SubscriptionInDTO;
import com.backendEvaluation.backendEvaluation.persistence.entity.Subscription;
import com.backendEvaluation.backendEvaluation.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(name="/subscription")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping
    @RequestMapping(path="/addSubscription", method = RequestMethod.POST)
    public Subscription createSubscription(@RequestBody SubscriptionInDTO subscriptionInDTO){
        return this.subscriptionService.createSubscription(subscriptionInDTO);
    }

    @GetMapping
    @RequestMapping(path="/getSubscription", method = RequestMethod.GET)
    public List<Subscription> findAllSubscription(){
        return this.subscriptionService.findAllCreateSubscription();
    }
}
