/*
Name: Akshath Jain
Date: 10/25/19
Purpose: This file:
            1) loads webcam video
            2) runs each frame of the video through posenet
            3) renders the result of posenet onto the resulting image
*/

var videoWidth = 640;
var videoHeight = 480;

var color = "#00FF00";

//hyper parameters to tune the network
var confidenceLevel = 0.5;

async function main(){
    var video = await loadVideo();
    var ctx = await loadCanvasContext();
    var net = await loadPosenet();

    video.addEventListener('play', () => renderVideo(video, net, ctx));
    renderVideo(video, net, ctx);
}
main();

async function renderVideo(video, net, ctx){
    const pose = await net.estimateSinglePose(video, {
        flipHorizontal: false,
    });

    ctx.clearRect(0, 0, videoWidth, videoHeight);

    ctx.drawImage(video, 0, 0);

    drawLines(ctx, pose.keypoints);
    drawKeypoints(ctx, pose.keypoints);
    window.requestAnimationFrame(() => renderVideo(video, net, ctx));
}

async function loadVideo(){
    var viewFrame = document.getElementById('videoViewFrame');

    if(navigator.mediaDevices.getUserMedia){
        var stream = await navigator.mediaDevices
                        .getUserMedia({
                            video: true,
                            width: videoWidth,
                            height: videoHeight,
                        }).catch(function(err){
                            console.log('Unable to get video: ' + err);
                        });

        viewFrame.srcObject = stream;
        viewFrame.width = videoWidth;
        viewFrame.height = videoHeight;
        return viewFrame;
    }
}

async function loadCanvasContext(){
    canvas = document.getElementById('output');
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    // mirror the canvas
    ctx = canvas.getContext('2d');
    ctx.translate(videoWidth, 0);
    ctx.scale(-1,1);

    return ctx;
}

async function loadPosenet(){
    const convNet = await posenet.load({
        architecture: 'MobileNetV1',
    });

    return convNet;
}

function drawKeypoints(ctx, keypoints){
    keypoints.forEach((point) => {
        if(point.score > confidenceLevel){
            ctx.beginPath();
            ctx.arc(point.position.x, point.position.y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
        }
    });
}

function drawLines(ctx, keypoints){
    //use the posenet helper method to get adjacent points (which makes
    //our life easier)
    var adjacentPoints = posenet.getAdjacentKeyPoints(keypoints, confidenceLevel);

    adjacentPoints.forEach((point) => {
        ctx.beginPath();
        ctx.moveTo(point[0].position.x, point[0].position.y);
        ctx.lineTo(point[1].position.x, point[1].position.y);
        ctx.strokeStyle = color;
        ctx.stroke();
    });
}