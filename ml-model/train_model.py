import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load the dataset
df = pd.read_csv("data/students.csv")

# Features and target
X = df[["attendance_pct", "cgpa", "backlogs"]]
y = df["dropout"]

# Split into train/test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Check accuracy
accuracy = model.score(X_test, y_test)
print(f"Model trained successfully!")
print(f"Accuracy: {accuracy:.2f}")

# Save the trained model
joblib.dump(model, "dropout_model.pkl")
print("Model saved as dropout_model.pkl")