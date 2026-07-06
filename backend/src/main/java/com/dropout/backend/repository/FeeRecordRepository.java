package com.dropout.backend.repository;

import com.dropout.backend.entity.FeeRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeeRecordRepository extends JpaRepository<FeeRecord, Long> {
}