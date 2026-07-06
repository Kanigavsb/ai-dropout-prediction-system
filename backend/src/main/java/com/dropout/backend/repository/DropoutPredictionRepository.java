package com.dropout.backend.repository;

import com.dropout.backend.entity.DropoutPrediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DropoutPredictionRepository extends JpaRepository<DropoutPrediction, Long> {
}