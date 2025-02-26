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
    data = {
        "column1": ['1','2','3']
            
        ,
        "column2": 
            ['11','22','33']
        
    }
    print(jsonify(data))
    return jsonify(data)
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
