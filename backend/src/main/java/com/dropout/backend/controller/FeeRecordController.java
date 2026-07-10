package com.dropout.backend.controller;

import com.dropout.backend.entity.FeeRecord;
import com.dropout.backend.repository.FeeRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/fee-records")
@CrossOrigin(origins = {"http://localhost:5173", "https://ai-dropout-prediction-system-henna.vercel.app"})
public class FeeRecordController {

    @Autowired
    private FeeRecordRepository feeRecordRepository;

    @GetMapping
    public List<FeeRecord> getAllRecords() {
        return feeRecordRepository.findAll();
    }

    @GetMapping("/{id}")
    public FeeRecord getRecordById(@PathVariable Long id) {
        return feeRecordRepository.findById(id).orElse(null);
    }

    @PostMapping
    public FeeRecord createRecord(@RequestBody FeeRecord record) {
        return feeRecordRepository.save(record);
    }

    @PutMapping("/{id}")
    public FeeRecord updateRecord(@PathVariable Long id, @RequestBody FeeRecord updated) {
        return feeRecordRepository.findById(id).map(record -> {
            record.setStudentId(updated.getStudentId());
            record.setAmountDue(updated.getAmountDue());
            record.setAmountPaid(updated.getAmountPaid());
            record.setStatus(updated.getStatus());
            return feeRecordRepository.save(record);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable Long id) {
        feeRecordRepository.deleteById(id);
    }
}