/*
Name: Akshath Jain
Date: 10/25/19
Purpose: driver class for estimating pose
*/

async function loadVideo(){
    console.log('here');
    var viewFrame = document.getElementById('videoViewFrame');

    if(navigator.mediaDevices.getUserMedia){
        var stream = await navigator.mediaDevices
                        .getUserMedia({
                            video: true,
                            width: 600,
                            height: 600,
                        }).catch(function(err){
                            console.log('Unable to get video: ' + err);
                        });

        viewFrame.srcObject = stream;
        return viewFrame;
    }
}

async function loadCanvasContext(){
    canvas = document.getElementById('output');
    canvas.width = 600;
    canvas.height = 600;
    ctx = canvas.getContext('2d');
    ctx.translate(600, 0);
    ctx.scale(-1,1);

    return ctx;
}

async function loadPosenet(){
    const convNet = await posenet.load({
        architecture: 'MobileNetV1',
    });

    return convNet;
}

async function main(){
    video = await loadVideo();
    ctx = await loadCanvasContext();
    net = await loadPosenet();

    video.addEventListener('play', function(){
        async function renderVideo(){
            const pose = await net.estimateSinglePose(video, {
                flipHorizontal: true
            });
            console.log(pose);

            ctx.drawImage(video, 0, 0);
            window.requestAnimationFrame(renderVideo);
        }
        renderVideo();
    });
}

main();