package com.dropout.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Entity
@Table(name = "fee_records")
@Data
public class FeeRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "amount_due")
    private BigDecimal amountDue;

    @Column(name = "amount_paid")
    private BigDecimal amountPaid;

    private String status;
}