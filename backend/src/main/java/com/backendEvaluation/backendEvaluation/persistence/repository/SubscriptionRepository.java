package com.backendEvaluation.backendEvaluation.persistence.repository;

import com.backendEvaluation.backendEvaluation.persistence.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription, Integer> {
}
