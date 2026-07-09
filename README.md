# AI-Based Student Dropout Prediction and Counseling System

## Project Description

A full-stack web application that predicts student dropout risk using a
machine learning model trained on academic indicators (attendance, CGPA,
backlogs), and provides a counseling module for staff to log and track
intervention with at-risk students.

## Technology Stack

- Frontend: React.js (Vite)
- Backend: Spring Boot (Java 21)
- Database: MySQL 8.0
- Machine Learning: Python (scikit-learn), Flask REST API

## Modules

- Login and Registration (JWT authentication, BCrypt password hashing)
- Dashboard with risk distribution overview
- Student Management (Add / View / Search)
- Academic Records (attendance, CGPA, backlogs)
- Fee Records
- AI Dropout Risk Prediction (Low / Medium / High)
- Counseling Session Logging

## How to Run

### Database

Create a MySQL database named `dropout_prediction_db` and run the schema
script in `docs/schema.sql`.

### Backend

```
cd backend
mvnw spring-boot:run
```
Runs on http://localhost:8080

### ML Service

```
cd ml-model
venv\Scripts\activate
python app.py
```
Runs on http://127.0.0.1:5001

### Frontend

```
cd frontend
npm install
npm run dev
```
Runs on http://localhost:5173

## Default Login

Register a new account at `/register`, then log in at `/`.

## API Testing

A Postman collection with sample requests (Login, Get Students, Run
Prediction) is included in `docs/`.

## Project Report & Presentation

See `docs/` for the full project report and presentation slides.
