package com.dropout.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "academic_records")
@Data
public class AcademicRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "attendance_pct")
    private Float attendancePct;

    private Float cgpa;

    private Integer backlogs;

    private Integer semester;
}