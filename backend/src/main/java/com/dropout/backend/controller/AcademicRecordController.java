package com.dropout.backend.controller;

import com.dropout.backend.entity.AcademicRecord;
import com.dropout.backend.repository.AcademicRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/academic-records")
@CrossOrigin(origins = {"http://localhost:5173", "https://ai-dropout-prediction-system-henna.vercel.app"})
public class AcademicRecordController {

    @Autowired
    private AcademicRecordRepository academicRecordRepository;

    @GetMapping
    public List<AcademicRecord> getAllRecords() {
        return academicRecordRepository.findAll();
    }

    @GetMapping("/{id}")
    public AcademicRecord getRecordById(@PathVariable Long id) {
        return academicRecordRepository.findById(id).orElse(null);
    }

    @PostMapping
    public AcademicRecord createRecord(@RequestBody AcademicRecord record) {
        return academicRecordRepository.save(record);
    }

    @PutMapping("/{id}")
    public AcademicRecord updateRecord(@PathVariable Long id, @RequestBody AcademicRecord updated) {
        return academicRecordRepository.findById(id).map(record -> {
            record.setStudentId(updated.getStudentId());
            record.setAttendancePct(updated.getAttendancePct());
            record.setCgpa(updated.getCgpa());
            record.setBacklogs(updated.getBacklogs());
            record.setSemester(updated.getSemester());
            return academicRecordRepository.save(record);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable Long id) {
        academicRecordRepository.deleteById(id);
    }
}