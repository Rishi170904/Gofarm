import sys
import json
import joblib
import numpy as np

try:
    # Load the model
    model = joblib.load(r"D:\projects\crop_recommend\crop_recommendation_model.pkl")

    # Get input data from command line arguments
    if len(sys.argv) < 2:
        raise ValueError("No input data provided")

    input_data = json.loads(sys.argv[1])
    features = np.array(input_data).reshape(1, -1)

    # Make prediction
    prediction = model.predict(features)

    # Return the prediction as JSON
    print(json.dumps(prediction.tolist()))
except Exception as e:
    print(json.dumps({"error": str(e)}))
    sys.exit(1)