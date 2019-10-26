---
layout: guide
title: TensorFlow.js
subject: tensorflow-js
---
# TensorFlow.js
###### Learn to create machine learning models on the browser

Computer Vision and Machine Learning have had significant advances over the past 5 years. However, much of it is shrouded behind complex and difficult to understand mathematics. TensorFlow.js achieves to solve this by abstracting away the math and providing users with a set of APIs that allow fast and efficient ML models to be embedded directly into the browser.

This talk will go over the basics of Computer Vision and Machine Learning. Participants do not need to have any prior experience with computer vision, machine learning, or TensorFlow.js to attend. Knowledge of basic web development are recommended, but not required.

## How to Attend

Bring a laptop with your text editor of choice ([Sublime](https://www.sublimetext.com/download), [VS Code](https://code.visualstudio.com/download), [Atom](https://atom.io/), [Vim](https://www.vim.org/download.php), [Emacs](https://www.gnu.oTrg/software/emacs/download.html), etc) installed.

## Resources
Lecture Materials
- [Slides](https://github.com/akshathjain/tensorflow-js)
- [Code](https://github.com/akshathjain/tensorflow-js)
- [Lab](https://github.com/akshathjain/tensorflow-js)

More information about TensorFlow.js extensions can be found on the [TensorFlow Website](https://www.tensorflow.org/js).

You can familiarize yourself with basic web development using these resources:
- [w3schools](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn)

## Lab
The lab will walk you through creating a simple website that displays an image, uses Posenet (a pretrained TensorFlow.js model) to identify a pose, and the output the resulting pose to the console.

### Task 1 - Setting up a website
Import the appropriate TensorFlow.js scripts:
```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet"></script>
```
<br>

Add an image of your choice to the website
```html
<img id='img' src="your image here!">
```
<br>

### Task 3 - Run the Posenet Convolutional Neural Network to Identify the image
In `main.js`:

```js
// obtain the image
var img = document.getElementById('img');

// load posenet
const convNet = await posenet.load({
    architecture: 'MobileNetV1',
});

// estimate pose
const pose = await convNet.estimateSinglePose(img, {
    flipHorizontal: false,
});

// print the pose out to the console
console.log(pose);
```

<br>

### Task 4 (extra) - Draw the pose onto a Canvas element
### Task 5 (extra) - Use your computer's webcam to track your pose