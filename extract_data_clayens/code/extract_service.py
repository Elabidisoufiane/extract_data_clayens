from flask import Flask, request, jsonify
import cv2
import numpy as np
import json
import os
import requests
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/extract', methods=['POST'])
def extract_text():
    # Get the uploaded image file
    file = request.files['file']
    # Read the image into memory
    img = np.frombuffer(file.read(), np.uint8)
    image = cv2.imdecode(img, cv2.IMREAD_COLOR)

    # Define coordinates (ensuring top-left < bottom-right)
    
    # piece 1
    #x1, y1 = 581, 277
    #x2, y2 = 667, int(298+(582-277)*13/14)

    #x11, y11 =751 , 277
    #x22, y22 =751+86 , int(298+(582-277)*13/14)
    # piece 2
    x1, y1 = 709, 340
    x2, y2 = 814, 720

    x11, y11 =930 , 340
    x22, y22 =1023 , 720
    # Crop the region
    cropped_image = image[y1:y2, x1:x2]
    cropped_image1 = image[y11:y22, x11:x22]

    # Process cropped images (Here you can perform OCR or any processing to extract text)
    # For this example, assume `process_image` is a function that returns text from an image
    result_text = process_image(cropped_image)
    result_text1 = process_image(cropped_image1)

    # Split and filter the extracted text
    column1_values = [line.strip() for line in result_text.split("\n") if line.strip() and line.strip() != "<<<"]
    column2_values = [line.strip() for line in result_text1.split("\n") if line.strip() and line.strip() != "<<<"]

    # Create a JSON object with separate columns
    data = {
        "column1": column1_values,
        "column2": column2_values
    }
    print(jsonify(data))
    return jsonify(data)

def process_image(image):
        # Save the cropped image temporarily
    cropped_image_path = "temp_cropped_image.jpeg"
    cv2.imwrite(cropped_image_path, image)


    # Send the image to the Flask API
    url = "http://127.0.0.1:5002/extract"  # Change if needed
    files = {'file': open(cropped_image_path, 'rb')}
    response = requests.post(url, files=files)
    # Convert response to JSON
    response_json = response.json()
    # Extract "result_text" and clean it
    result_text = response_json.get("result_text", "").strip()
    return result_text

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
