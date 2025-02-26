import cv2
import numpy as np
import requests

# Load the image
image = cv2.imread("images/piece1/image1.jpeg")

# Define coordinates (ensuring top-left < bottom-right)
x1, y1 = 581, int(277+(582-277)*8/14)
x2, y2 = 667, int(298+(582-277)*8/14)

# Crop the region
cropped_image = image[y1:y2, x1:x2]

# Get dimensions of the cropped image
crop_height, crop_width, channels = cropped_image.shape
00
# Define size of the blank image (e.g., 500x500 pixels)
blank_height, blank_width = 500, 500
blank_image = 255 * np.ones((blank_height, blank_width, channels), dtype=np.uint8)  # White background

# Define where to place the cropped image (center or a specific position)
start_x, start_y = 150, 200  # Adjust as needed

# Ensure cropped image fits within the blank image
end_x, end_y = start_x + crop_width, start_y + crop_height
if end_x > blank_width or end_y > blank_height:
    raise ValueError("Cropped image is too large to fit in the blank image at the specified position!")

# Paste the cropped image onto the blank image
blank_image[start_y:end_y, start_x:end_x] = cropped_image

# Save the final image temporarily
cropped_image_path = "temp_cropped_image.jpeg"
cv2.imwrite(cropped_image_path, blank_image)

# Send the image to the Flask API
url = "http://127.0.0.1:5000/extract"  # Change if needed
files = {'file': open(cropped_image_path, 'rb')}
response = requests.post(url, files=files)

# Convert response to JSON
response_json = response.json()

# Extract "result_text" and clean it
result_text = response_json.get("result_text", "").strip()

# Print the response from the server
print("result:", result_text)
