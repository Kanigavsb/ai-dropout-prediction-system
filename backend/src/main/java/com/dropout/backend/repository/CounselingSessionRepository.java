package com.dropout.backend.repository;

import com.dropout.backend.entity.CounselingSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CounselingSessionRepository extends JpaRepository<CounselingSession, Long> {
}