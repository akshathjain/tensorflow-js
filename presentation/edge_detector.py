# Name: Akshath Jain
# Date: 10/26/19
# Purpose: extract edges from images

import os
import cv2 as cv

path = 'images/'
for file in os.listdir(path):
    if file.endswith(".jpeg"):
        img = cv.imread(path + file)
        edges = cv.Canny(img, 100, 200) # use the Canny edge detector
        cv.imwrite('edges/{}'.format(file), edges)