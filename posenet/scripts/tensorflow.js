/*
Name: Akshath Jain
Date: 10/25/19
Purpose: Use TensorFlow.js Posenet (pretrained model) to return pose estimates
         from a videostream
*/

const videoWidth = 600;
const videoHeight = 600;

async function initPosenet(){
    var canvas = document.getElementById('output');
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    var ctx = canvas.getContext('2d');

    // const convNet = await posenet.load({
    //     architecture: 'MobileNetV1',
    // });

    // function loop(){
    //     var video = document.getElementById('videoViewFrame');
    //     console.log('in loop');
    //     ctx.drawImage(video, 0, 0);
    //     setTimeout(loop, 1000); //30 fps
    // }
    // loop();

    // async function getPoseFromVideo(){


    //     const pose = await convNet.estimateSinglePose(video, {
    //         flipHorizontal: true
    //     });

    //     ctx.clearRect(0, 0, videoWidth, videoHeight);
    //     ctx.drawImage(video, 0, 0, videoWidth, videoHeight);

    //     console.log(pose);

    //     window.requestAnimationFrame(getPoseFromVideo);
    // }

    // //different browsers have different ways of getting the current
    // //window animation frame, we need to account for all of them
    // window.requestAnimationFrame = window.requestAnimationFrame ||
    //                            window.mozRequestAnimationFrame ||
    //                            window.webkitRequestAnimationFrame ||
    //                            window.msRequestAnimationFrame;

    // getPoseFromVideo();
}