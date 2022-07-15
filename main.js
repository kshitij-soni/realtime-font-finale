var noseX=0;
var noseY=0;
var leftWrist=0;
var rightWrist=0;
var difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550, 550);
    
    canvas = createCanvas(500, 500);
    canvas.position(560,150);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Success");
}

function draw(){
    background('orange');
    fill('red');
    text('Doodle', noseX, noseY);
    textSize(difference);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist - rightWrist);
    }
}

