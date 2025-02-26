import cv2

# Load the image
image = cv2.imread("images/piece2/image1.jpeg")

# Define coordinates (ensuring top-left < bottom-right)
#Moule
# x1, y1 = 581, int(277+(582-277)*13/14)
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
# Draw the rectangle
cv2.rectangle(image, (x1, y1), (x2, y2), (0, 255, 0), 2)  # Green rectangle, thickness 2
cv2.rectangle(image, (x11, y11), (x22, y22), (0, 255, 0), 2)  # Green rectangle, thickness 2

# Show the image
cv2.imshow("Image with Rectangle", image)
cv2.waitKey(0)
cv2.destroyAllWindows()
