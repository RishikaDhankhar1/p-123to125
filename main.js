
diffrence=0;
leftWristx=0;
rightWristx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('poseNet is initialized');

}

function gotPoses(results){
if(results.length>0)
{
console.log(results);
leftWristx=results[0].pose.leftWrist.x;
rightWristx=results[0].pose.rightWrist.x;
diffrence=floor(leftWristx-rightWristx);
}
}

function draw(){
    background('purple');
    document.getElementById("font_Size").innerHTML="Font size of the text will be = "+diffrence+"px";
    fill("peachpuff");
    textSize(diffrence);
    text("RISHIKA",50,400);
}