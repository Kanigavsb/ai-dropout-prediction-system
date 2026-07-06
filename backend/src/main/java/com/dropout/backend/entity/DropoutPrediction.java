package com.dropout.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "dropout_predictions")
@Data
public class DropoutPrediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "risk_score")
    private Float riskScore;

    @Column(name = "risk_level")
    private String riskLevel;

    @Column(name = "predicted_on")
    private LocalDateTime predictedOn;
}