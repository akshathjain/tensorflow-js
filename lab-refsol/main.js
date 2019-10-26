async function main() {
    // obtain the image
    var img = document.getElementById('img');

    // load posenet
    const convNet = await posenet.load({
        architecture: 'MobileNetV1',
    });

    // estimate pose
    const pose = await convNet.estimateSinglePose(img);

    // print the pose out to the console
    console.log(pose);
}

main();