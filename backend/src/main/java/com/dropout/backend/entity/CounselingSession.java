package com.dropout.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "counseling_sessions")
@Data
public class CounselingSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "counselor_id")
    private Long counselorId;

    private String notes;

    @Column(name = "session_date")
    private LocalDate sessionDate;

    @Column(name = "follow_up_date")
    private LocalDate followUpDate;
}