import cv2
import requests
import json

# Load the image
image = cv2.imread("images/piece1/image1.jpeg")

# Define coordinates (ensuring top-left < bottom-right)
x1, y1 = 581, 277
x2, y2 = 667, int(298+(582-277)*13/14)
x11, y11 =751 , 277
x22, y22 =751+86 , int(298+(582-277)*13/14)
# Crop the region
cropped_image = image[y1:y2, x1:x2]
cropped_image1 = image[y11:y22, x11:x22]

# Save the cropped image temporarily
cropped_image_path = "temp_cropped_image.jpeg"
cv2.imwrite(cropped_image_path, cropped_image)


# Send the image to the Flask API
url = "http://127.0.0.1:5000/extract"  # Change if needed
files = {'file': open(cropped_image_path, 'rb')}
response = requests.post(url, files=files)
# Convert response to JSON
response_json = response.json()
# Extract "result_text" and clean it
result_text = response_json.get("result_text", "").strip()

cropped_image_path1 = "temp_cropped_image1.jpeg"
cv2.imwrite(cropped_image_path1, cropped_image1)

files1 = {'file': open(cropped_image_path1, 'rb')}
response1 = requests.post(url, files=files1)
# Convert response to JSON
response_json1 = response1.json()

# Extract "result_text" and clean it
result_text1 = response_json1.get("result_text", "").strip()

# Split and filter the extracted text
column1_values = [line.strip() for line in result_text.split("\n") if line.strip() and line.strip() != "<<<"]
column2_values = [line.strip() for line in result_text1.split("\n") if line.strip() and line.strip() != "<<<"]

# Create a JSON object with separate columns
data = {
    "column1": column1_values,
    "column2": column2_values
}

# Convert to JSON
json_result = json.dumps(data, indent=4, ensure_ascii=False)

# Print or save JSON
print(json_result)