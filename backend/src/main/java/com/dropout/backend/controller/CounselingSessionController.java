package com.dropout.backend.controller;

import com.dropout.backend.entity.CounselingSession;
import com.dropout.backend.repository.CounselingSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/counseling-sessions")
@CrossOrigin(origins = "http://localhost:5173")
public class CounselingSessionController {

    @Autowired
    private CounselingSessionRepository counselingSessionRepository;

    @GetMapping
    public List<CounselingSession> getAllSessions() {
        return counselingSessionRepository.findAll();
    }

    @GetMapping("/{id}")
    public CounselingSession getSessionById(@PathVariable Long id) {
        return counselingSessionRepository.findById(id).orElse(null);
    }

    @PostMapping
    public CounselingSession createSession(@RequestBody CounselingSession session) {
        return counselingSessionRepository.save(session);
    }

    @PutMapping("/{id}")
    public CounselingSession updateSession(@PathVariable Long id, @RequestBody CounselingSession updated) {
        return counselingSessionRepository.findById(id).map(session -> {
            session.setStudentId(updated.getStudentId());
            session.setCounselorId(updated.getCounselorId());
            session.setNotes(updated.getNotes());
            session.setSessionDate(updated.getSessionDate());
            session.setFollowUpDate(updated.getFollowUpDate());
            return counselingSessionRepository.save(session);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteSession(@PathVariable Long id) {
        counselingSessionRepository.deleteById(id);
    }
}
