from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load("dropout_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    attendance_pct = data.get("attendance_pct")
    cgpa = data.get("cgpa")
    backlogs = data.get("backlogs")

    features = np.array([[attendance_pct, cgpa, backlogs]])
    risk_score = model.predict_proba(features)[0][1]  # probability of dropout

    if risk_score > 0.66:
        risk_level = "High"
    elif risk_score > 0.33:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return jsonify({
        "risk_score": float(risk_score),
        "risk_level": risk_level
    })

if __name__ == "__main__":
    app.run(port=5001, debug=True)