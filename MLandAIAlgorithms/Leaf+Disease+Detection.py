
# coding: utf-8

# In[ ]:


import cv2
import numpy as np

contour_info = []
image = cv2.imread('images/Brown_Spots_Leaf.jpg')
original = image
cv2.imshow('Original image',image)
#Blur the image
image = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
gray = cv2.GaussianBlur(image, (3, 3), 0)
cv2.imshow('Blurred and Gray image',gray)

#Do Canny edge Detection to get images of an image
canny_img = cv2.Canny(gray,200,255)
canny_image = cv2.dilate(canny_img,None)
cv2.imshow("Canny",canny_img)
#find the contours in the image (boundaries)
_,contours, hierarchy = cv2.findContours(canny_img, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)
n = len(contours)-1
contours = sorted(contours,key = cv2.contourArea,reverse = False)[:n]
for c in contours:
    if cv2.contourArea(c) > 1.5:
        cv2.drawContours(original,c, -1, (255,255,0), 1)    

cv2.imshow("Contours",original)
cv2.waitKey(0)
cv2.destroyAllWindows()


# In[10]:


import cv2
import numpy as np
# we want only want to the 
original = cv2.imread('images/Brown_Spots_Leaf.jpg')
orig_b = original
sensitivity = 40
lower_blue = np.array([170,100,80])
upper_blue =np.array([180,256,256])

lower_brown = np.array([10, 100, 20])
upper_brown = np.array([20, 255, 255])

lower_yellow = np.array([20,100,100])
upper_yellow = np.array([30,255,255])

lower_black = np.array([0,0,0])
upper_black = np.array([0,0,100])

lower_purple = np.array([0,0,0])
upper_purple = np.array([300,100,100])

cv2.imshow('Original image',original)
hsv_img = cv2.cvtColor(original,cv2.COLOR_BGR2HSV)

#these are ranges for color ranges
mask_yellow = cv2.inRange(hsv_img,lower_yellow,upper_yellow)
mask_brown = cv2.inRange(hsv_img,lower_brown,upper_brown)
mask_purple = cv2.inRange(hsv_img,lower_purple,upper_purple)
mask_blue = cv2.inRange(hsv_img,lower_blue,upper_blue)
mask_black = cv2.inRange(hsv_img,lower_black,upper_black)

final_mask = mask_yellow + mask_brown + mask_purple + mask_blue + mask_black
cv2.imshow('final_mask',final_mask)
#mask the three colors above 

#fill the small gaps
opening_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (20, 20))
closing_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
final_mask_closed = cv2.morphologyEx(final_mask,cv2.MORPH_CLOSE,opening_kernel)
#kill any specks 
final_mask_closed_open = cv2.morphologyEx(final_mask_closed,cv2.MORPH_OPEN,closing_kernel)

#need to dilate to add more pixels
erosion_kernel =np.ones((3,3),np.uint8)
final_mask_closed = cv2.dilate(final_mask_closed_open,erosion_kernel,iterations=7)
final_processed_image = cv2.bitwise_and(original,original,mask=final_mask_closed)
#turn to gray scale
cv2.imshow('Gray image',final_mask_closed)
#get more coutours
cv2.imshow('Final Image',final_processed_image)
#do bitwise bounding box
cv2.waitKey(0)
cv2.destroyAllWindows()

