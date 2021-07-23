song="";

function preload() {
    song=loadSoung("music.mp3");
}
scoreRightWrist=0;
scoreLeftWrist=0;

RightWristX=0;
RightWristY=0;

LeftWristX=0;
LeftWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('Pose',gotPoses);
}