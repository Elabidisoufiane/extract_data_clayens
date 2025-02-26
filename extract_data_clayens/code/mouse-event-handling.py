import cv2

# Load the image
image = cv2.imread("images/piece2/image1.jpeg")
clone = image.copy()  # Keep a copy

# Click event function
def click_event(event, x, y, flags, param):
    if event == cv2.EVENT_LBUTTONDOWN:  # Left click
        print(f"Clicked at: x={x}, y={y}")
        cv2.circle(image, (x, y), 5, (0, 0, 255), -1)  # Mark the point
        cv2.imshow("Image Viewer", image)

# Show image in a resizable window
cv2.namedWindow("Image Viewer", cv2.WINDOW_NORMAL)
cv2.setMouseCallback("Image Viewer", click_event)
cv2.imshow("Image Viewer", image)

cv2.waitKey(0)
cv2.destroyAllWindows()
