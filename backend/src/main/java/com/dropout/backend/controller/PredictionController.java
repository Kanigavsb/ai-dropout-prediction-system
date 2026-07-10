package com.dropout.backend.controller;

import com.dropout.backend.entity.AcademicRecord;
import com.dropout.backend.entity.DropoutPrediction;
import com.dropout.backend.repository.AcademicRecordRepository;
import com.dropout.backend.repository.DropoutPredictionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/predictions")
@CrossOrigin(origins = "http://localhost:5173")
public class PredictionController {

    @Autowired
    private AcademicRecordRepository academicRecordRepository;

    @Autowired
    private DropoutPredictionRepository dropoutPredictionRepository;

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping
    public List<DropoutPrediction> getAllPredictions() {
        return dropoutPredictionRepository.findAll();
    }

    @PostMapping("/run/{studentId}")
    public ResponseEntity<?> runPrediction(@PathVariable Long studentId) {
        // Get the student's latest academic record
        List<AcademicRecord> records = academicRecordRepository.findAll();
        AcademicRecord record = records.stream()
                .filter(r -> r.getStudentId().equals(studentId))
                .findFirst()
                .orElse(null);

        if (record == null) {
            return ResponseEntity.badRequest().body("No academic record found for this student");
        }

        // Call the Python Flask ML API
        Map<String, Object> requestBody = Map.of(
                "attendance_pct", record.getAttendancePct(),
                "cgpa", record.getCgpa(),
                "backlogs", record.getBacklogs()
        );

        Map<String, Object> mlResponse;
        try {
              mlResponse = restTemplate.postForObject(
        "https://dropout-prediction-ml.onrender.com/predict",
        requestBody,
        Map.class
);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Could not reach ML prediction service. Is it running?");
        }

        // Save the prediction result
        DropoutPrediction prediction = new DropoutPrediction();
        prediction.setStudentId(studentId);
        prediction.setRiskScore(Float.valueOf(mlResponse.get("risk_score").toString()));
        prediction.setRiskLevel(mlResponse.get("risk_level").toString());
        prediction.setPredictedOn(LocalDateTime.now());

        dropoutPredictionRepository.save(prediction);

        return ResponseEntity.ok(prediction);
    }
}